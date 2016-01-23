#!/usr/bin/env bash
# Sets up the Python operating environment.

TENSORFLOW_PACKAGE=""

if [[ "$OSTYPE" == "linux-gnu" ]]; then
  echo "Do you want GPU support? [y/n]"
  read use_gpu

  echo "Configuring for Linux..."
  TENSORFLOW_PACKAGE=https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.5.0-cp27-none-linux_x86_64.whl

  if [[ "$use_gpu" == "y" || "$use_gpu" == "Y" ]]; then
    echo "Using GPU!!!"
    # Instead of using the standard Google-released GPU-enabled Linux distro,
    # We build our own pip package based on this gist: https://gist.github.com/erikbern/78ba519b97b440e10640
    TENSORFLOW_PACKAGE=https://s3.amazonaws.com/gelsto-data/tensorflow-release/gpu/tensorflow-0.5.0-cp27-none-linux_x86_64.whl

    # If you *really* want the stock build, use this instead:
    #TENSORFLOW_PACKAGE=https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow-0.5.0-cp27-none-linux_x86_64.whl
  fi

elif [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Configuring for Mac OS..."
  TENSORFLOW_PACKAGE=https://storage.googleapis.com/tensorflow/mac/tensorflow-0.5.0-py2-none-any.whl
fi

if [ -d "venv" ]; then
  echo "Removing existing virtualenv..."
  rm -rf venv
fi

echo "Creating virtualenv..."

virtualenv venv

echo "Installing packages..."

# Tensorflow needs some special love
venv/bin/pip install --upgrade six
venv/bin/pip install --upgrade $TENSORFLOW_PACKAGE

venv/bin/pip install -r requirements.txt

echo "Done!"
