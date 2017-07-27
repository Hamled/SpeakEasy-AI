# Always prefer setuptools over distutils
from setuptools import setup, find_packages
# To use a consistent encoding
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='SpeakEasy-AI',

    # Versions should comply with PEP440.  For a discussion on single-sourcing
    # the version across setup.py and the project code, see
    # https://packaging.python.org/en/latest/single_source_version.html
    version='0.1.0',

    description='SpeakEasy-AI is a machine learning project by https://github.com/gelsto',
    long_description=long_description,

    # The project's main homepage.
    url='https://github.com/Hamled/SpeakEasy-AI',

    # Author details
    author='Laura Gelston',
    author_email='lauragelston@gmail.com',

    # Choose your license
    license='Unknown',

    # You can just specify the packages manually here if your project is
    # simple. Or you can use find_packages().
    packages=find_packages(exclude=['scripts', 'distributed', 'test']),
)
