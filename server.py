"""Rest API for chatting with Marvin

  Running this program sets up a server that allows RESTful interaction with a SpeakEasy chatbot.  The chatbot (named Marvin) is initialized on a single thread to avoid errors in a runtime environment (note that building and restoring the model will take a few minutes, and requires approximately 1GB of RAM with the default parameters used by the speak_easy program).  POST requests to the `/marvin` endpoint are expected to include a JSON object with a prompt for Marvin to decode and return a JSON object.

  Example request:
    ```
    curl -H 'Content-Type: application/json' -X POST -d '{"prompt": "what is the meaning of life?"}' http://speakeasy-ai.elasticbeanstalk.com/marvin
    ```
  Example response:
    ```
    {
      "response": "the internet ."
    }
    ```

  You can chat with Marvin at https://speakez.tk/
"""
from __future__ import print_function
from __future__ import absolute_import

import sys
import os
import time
from threading import Thread

from flask import Flask, jsonify, make_response, request, abort
from flask.ext.cors import CORS

from trainer.model.chat_bot import ChatBot

application = Flask(__name__)
CORS(application)
Marvin = None
print("Loading SpeakEasy AI server")

def initialize():
  global Marvin
  if not Marvin:
    print("Going to load Marvin")
    Marvin = ChatBot()
    print("Marvin is loaded")


@application.route('/', methods=["GET"])
def root():
  return make_response('fizzle bizzle %s' % time.time(), 200)

@application.route('/message', methods=["POST"])
def generate_response():
  print("HERE")
  if not Marvin:
    print("Marvin is not ready yet")
    abort(418)
    return
  try:
    if not request.json or not 'message' in request.json:
      abort(400)
    response = Marvin.respond(request.json['message'])
    return make_response(jsonify({'content': response}), 200)
  except:
    print(sys.exc_info()[0])
    return make_response(jsonify({'error': sys.exc_info()[0]}), 500)


if __name__ == '__main__':
  initialize()
  application.run(debug=True)
else:
  Thread(target=initialize).start()
