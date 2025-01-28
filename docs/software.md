# Using Software

FarmShare has lots of free and commercial software available to use. We provide software that comes with Ubuntu, software that we package ourselves, and we also provide the capability for you to build and use software yourself.

## Software Sources

Software on FarmShare comes from three sources:

* Packages
* Modules
* Build your own

## Packages

Packaged software is easiest to use, because you don't have to do anything. Packaged software has already been installed on all of the systems in the environment, so to use the software, you just have to run the command.

For example, to run the packaged version of Python, you just need to run the python3 command:

~~~no-highlight
ta5@rice-01:~$ python3 --version
Python 3.10.12
~~~

FarmShare runs Ubuntu 22.04 LTS, which means almost anything in the [Ubuntu Jammy package repository](http://packages.ubuntu.com/jammy) is available to be installed.

## Modules

To provide up-to-date software, we use modules. Modularized software lives in shared, network-connected storage, and is  built by the FarmShare support team. To see a listing of available software, run the module available command:

~~~no-highlight
ta5@rice-01:~$ module available

---------------------------- /software/modules/linux-ubuntu22.04-x86_64/Core ----------------------------
   apptainer/1.1.9                    libpng/1.5.30
   blast-plus/2.14.1                  llvm/16.0.6
   boost/1.83.0                       micromamba/1.1.0
   bowtie2/2.5.1                      mpich/4.1.2
   cuda/11.4.4                        numactl/2.0.14
   cudnn/8.2.4.15-11.4                openblas/0.3.23
   gcc/13.2.0                         openblas/0.3.24                   (D)
   imagemagick/7.1.1-11               openmpi/1.10.7
   intel-oneapi-compilers/2023.2.1    py-jupyterlab/4.0.1_python/3.11.6
   intel-oneapi-dal/2023.2.0          py-pip/23.1.2_python/3.11.6
   intel-oneapi-ipp/2021.9.0          python/3.11.6
   intel-oneapi-mkl/2023.2.0          r-magick/2.7.4_r/4.3.0
   intel-oneapi-mpi/2021.10.0         r-tidyverse/2.0.0_r/4.3.0
   intel-oneapi-tbb/2021.10.0         r/4.3.0
   julia/1.9.2                        rust/1.75.0
   libjpeg-turbo/2.1.5.1

------------------------------------- /software/modules/commercial --------------------------------------
   mathematica/13.3.1    mathematica/14.0.0 (D)    matlab/r2023b    sas/9.4    stata/18

  Where:
   D:  Default Module

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
~~~

## Build Your Own

In addition to the software that we provide for you to use, it is perfectly OK for you to build and use your own software.

## Python

Different versions of Python3 are available on FarmShare both as system modules as well as system software. To see a listing run `module spider python`

We install commonly used Python packages (such as NumPy, SciPy) globally that are available when you load Python with the module command.

To install packages that are not already installed you can use `pip`

### pip

`pip` is available as a module on FarmShare. You will need to use the `--user` flag which places the package installation under your $HOME directory.

Here is an example on how to install `pandas`:

~~~
ta5@rice-02:~$ module spider python

----------------------------------------------------------------------------
  python:
----------------------------------------------------------------------------
     Versions:
        python/3.10.13
        python/3.11.7
        python/3.12.5
        python/3.13.0
...
ta5@rice-02:~$ 
ta5@rice-02:~$ module spider pip

----------------------------------------------------------------------------
  py-pip/23.1.2_python:
----------------------------------------------------------------------------
     Versions:
        py-pip/23.1.2_python/3.10.13
        py-pip/23.1.2_python/3.11.7
        py-pip/23.1.2_python/3.12.5
        py-pip/23.1.2_python/3.13.0
...
ta5@rice-02:~$ 
ta5@rice-02:~$ module load py-pip/23.1.2_python/3.13.0
ta5@rice-02:~$ module load python/3.13.0
ta5@rice-02:~$ 
ta5@rice-02:~$ python --version
Python 3.13.0
ta5@rice-02:~$ 
ta5@rice-02:~$ python3 -m pip install --user pandas
...
ta5@rice-02:~$ python3 -m pip freeze
numpy==2.2.2
pandas==2.2.3
python-dateutil==2.9.0.post0
pytz==2024.2
six==1.17.0
tzdata==2025.1
~~~

### Virtual Environments

Virtual environment is an isolated space for your Python projects, allowing you to manage dependencies separately for each project. You can create a personal Python environment that will persist each time you log in. There is no risk of packages being updated and allows greater control over your environment. 

To create python virtual environments, start by loading your preferred version of Python and use the `venv` command:

~~~
ta5@rice-02:~$ module load python/3.13.0
ta5@rice-02:~$ 
ta5@rice-02:~$ python3 -m venv tutorial_env
ta5@rice-02:~$ source tutorial_env/bin/activate
(tutorial_env) ta5@rice-02:~$ 
(tutorial_env) ta5@rice-02:~$ python --version
Python 3.13.0
(tutorial_env) ta5@rice-02:~$ 
~~~

This will create a new virtual environment in the tutorial_env (the name inside the parentheses) subdirectory, and configure the current shell to use it as the default python environment.

Here you can install packages with `pip`:

~~~
(tutorial_env) ta5@rice-02:~$
(tutorial_env) ta5@rice-02:~$ pip install pandas
~~~

Installing `setuptools` and `wheel` projects are useful to ensure you can also install from source archives:

~~~
(tutorial_env) ta5@rice-02:~$
(tutorial_env) ta5@rice-02:~$ pip install --upgrade pip setuptools wheel
(tutorial_env) ta5@rice-02:~$ pip freeze
numpy==2.2.2
pandas==2.2.3
python-dateutil==2.9.0.post0
pytz==2024.2
setuptools==75.8.0
six==1.17.0
tzdata==2025.1
wheel==0.45.1
~~~

To deactivate or leave the environment `tutorial_env`:

~~~
(tutorial_env) ta5@rice-02:~$ deactivate 
~~~

### Using Virtual Environment in SLURM

Python virtual environments can be used in slurm jobs. To submit a `sbatch` job using a venv environment, you can `source` the environment at the top of the sbatch script.

Sample python script that prints versions of packages:

~~~
ta5@rice-02:~$ cat test.py 
import numpy as np
import pandas as pd
import sys

print(f"Python version = {sys.version}")
print(f"Numpy version = {np.version.version}")
print(f"Pandas version = {pd.__version__}")
~~~

To submit this script using the venv `tutorial_env` create a sbatch script to load the venv and run `test.py`:


~~~
ta5@rice-02:~$ cat tutorial_env.sh 
#!/bin/bash

#SBATCH --job-name=tutorial_env
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --partition=normal

# Load venv tutorial_env
source tutorial_env/bin/activate

# Run script
python3 test.py

ta5@rice-02:~$ 
ta5@rice-02:~$ 
ta5@rice-02:~$ sbatch tutorial_env.sh
Submitted batch job 298438

ta5@rice-02:~$ cat slurm-298438.out 
Python version = 3.13.0 (main, Dec 10 2024, 13:22:44) [GCC 13.2.0]
Numpy version = 2.2.2
Pandas version = 2.2.3
~~~
