"""Create SpeakEasy model and initialize or load parameters in session."""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np
from six.moves import xrange
import tensorflow as tf
from tensorflow.python.platform import gfile

from ..model.seq2seq_model import Seq2SeqModel
from ..runtime_variables import params, buckets


def create_model(session, forward_only):
  if params.buckets:
    model = Seq2SeqModel(
        params.vocab_size, buckets,
        params.size, params.num_layers, params.max_gradient_norm, params.batch_size,
        params.learning_rate, params.learning_rate_decay_factor, params.model_type,
        forward_only=forward_only)
  else:
    model = Seq2SeqModel(
        params.vocab_size, params.max_sentence_length,
        params.size, params.num_layers, params.max_gradient_norm, params.batch_size,
        params.learning_rate, params.learning_rate_decay_factor, params.model_type,
        forward_only=forward_only)

  ckpt = tf.train.get_checkpoint_state(params.train_dir)

  if params.restore_model:
    print("Reading model parameters from %s" % params.restore_model)
    model.saver.restore(session, params.restore_model)
  else:
    writer = tf.summary.FileWriter(params.log_dir, graph=session.graph_def)
    if ckpt and gfile.Exists(ckpt.model_checkpoint_path):
      print("Reading model parameters from %s" % ckpt)
      model.saver.restore(session, ckpt.model_checkpoint_path)
    else:
      print("Created model with fresh parameters.")
      session.run(tf.initialize_all_variables())

  return model