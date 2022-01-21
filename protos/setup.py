import pathlib, os
from setuptools import setup, find_packages
from pathlib import Path
from typing import List

# The directory containing this file
HERE = pathlib.Path(__file__).parent
# The text of the README file
README: str = (HERE / "README.md").read_text()

def get_packages(source_dir):
    import os
    packages = set()
    os.system(f"touch {os.path.join(source_dir,'__init__.py')}")
    for subdir, dirs, files in os.walk(source_dir):
        os.system(f"touch {os.path.join(subdir,'__init__.py')}")
        pkg =packages.add(os.path.join(subdir).replace(f"{source_dir}{os.path.sep}","").replace(os.path.sep,"."))
    print("added packages: ",packages)
packages = get_packages("gen/python")
packages = find_packages("gen/python")
# Setup
setup(
    name='alsabor',
    version="0.0.1",
    packages=packages,
    #py_modules=["alsabor"],
    package_dir={"": "gen/python"},
    include_package_data=True,
    python_requires=">=3.6",
    url='https://gitlab.com/alsabor/shared/protos',
    license='LICENCESE',
    author='Fabio Moreno',
    author_email='fabio.moreno@cuemby.com',
    description='gRPC models for alSabor project',
    long_description=README,
    setup_requires=['wheel', 'twine'],
    install_requires=[
        'wheel',
        'twine',
        'grpcio>=1.23.0',
        'grpcio-tools>=1.23.0'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
    ]
)
