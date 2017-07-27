"""Interactive decoding of restored model from the command line"""
from __future__ import print_function
from __future__ import absolute_import

import sys
from model.chat_bot import ChatBot

def decode():
  Marvin = ChatBot()
  sys.stdout.write("> ")
  sys.stdout.flush()
  sentence = sys.stdin.readline()
  while sentence:
    response = Marvin.respond(sentence)
    print(response)
    print("> ", end="")
    sys.stdout.flush()
    sentence = sys.stdin.readline()
