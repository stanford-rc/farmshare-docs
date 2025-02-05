# Using Software

FarmShare has lots of free and commercial software available to use. We provide software that comes with Ubuntu, software that we package ourselves, and we also provide the capability for you to build and use software yourself.

## Software Sources

Software on FarmShare comes from three sources:

* Packages
* Modules
* Build your own

### Packages

!!! info "Ubuntu repo"
    FarmShare runs Ubuntu 22.04 LTS, which means almost anything in the [Ubuntu Jammy package repository](http://packages.ubuntu.com/jammy) is available to be installed.

Packaged software is easiest to use, because you don't have to do anything. Packaged software has already been installed on all of the systems in the environment, so to use the software, you just have to run the command.

For example, to run the packaged version of Python, you just need to run the `python3` command:

!!! example "System Python"
    $ python3 --version
    Python 3.10.12

### Modules

To provide up-to-date software, FarmShare uses loadable *environment modules*. Modularized software lives in shared, network-connected storage, and is  built by the FarmShare support team. This mechanism allows us to provide multiple versions of the same software concurrently, and gives users the possibility to easily switch between software versions.

The module system is used to manage the user environment and to *activate* software packages on demand. In order to use modules based software installed on FarmShare, you must first load the corresponding software module.

When you load a module, the system will set or modify your user environment variables to enable access to the software package provided by that module. For instance, the `$PATH` environment variable might be updated so that appropriate executable for that package can be used.

The example below shows how to load `r` module for the [R](https://www.r-project.org/) software:

``` shell
ta5@rice-04:~$ module load r
ta5@rice-04:~$ R --version
R version 4.4.0 (2024-04-24) -- "Puppy Cup"
Copyright (C) 2024 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under the terms of the
GNU General Public License versions 2 or 3.
For more information about these matters see
https://www.gnu.org/licenses/.
```

#### Module usage

!!! info "Lmod user guide"
    Additional module sub-commands are documented in the `module help` command. For complete reference, please refer to the official [Lmod documentation](https://lmod.readthedocs.io/en/latest/010_user.html)
    
The most common `module` commands are outlined in the following table. `module` commands may be shortened with the `ml` alias.

| Module command | Short version | Description |
| --------------- | -------------- | -------------- |
| `module avail` | `ml av` | List available software |
| `module spider r` | `ml spider r` | Search for particular software|
| `module keyword blas` | `ml key blas` | Search for `blas` in module names and descriptions|
| `module whatis gcc` | `ml whatis gcc` | Display information about the `gcc` module |
| `module help gcc` | `ml help gcc` | Display module specific help |
| `module load gcc` | `ml gcc` | Load a module to use the associated software |
| `module load r/4.3.3` | `ml r/4.3.3` | Load specific version of a module |
| `module unload gcc` | `ml -gcc` | Unload a module |
| `module purge` | `ml purge` | Remove all modules |
| `module save foo` | `ml save foo` | Save the state of all loaded modules in a collection named `foo` |
| `module restore foo` | `ml restore foo` | Restore the state of saved modules from the `foo` collection |

#### Module properties

To quickly see some of the modules characteristics, `module avail` will display colored property attributes next to the module names. The main module properties are:

* `S`: Module is sticky, requires `--force` to unload or purge
* `L`: Indicate currently loaded module
* `D`: Default module that will be loaded when multiple versions are available
* `g`: GPU-accelerated software, will only run on GPU nodes

#### Searching for modules

You can search through all the available modules for either:

* a module name (if you already know it), using `module spider`
* any string within modules names and descriptions, using `module keyword`

For instance, if you want to know how to load the `apptainer` module, you can do:

!!! example
    $ module spider apptainer

If you don't know the module name, or want to list all the modules that contain
a specific string of characters in their name or description, you can use
`module keyword`. For instance, the following command will list all the modules
providing a BLAS library:

!!! example
    $ module keyword blas

#### Listing

For a complete list of available software modules, run the `module available` command:

``` shell
$ module available

---------------------------------------------- /software/modules/linux-ubuntu22.04-x86_64/Core -----------------------------------------------
   apptainer/1.1.9                   intel-oneapi-compilers/2024.1.0        micromamba/1.4.2                    python/3.11.7
   apptainer/1.3.4            (D)    intel-oneapi-dal/2024.2.0              mpich/4.2.1                         python/3.12.5
   blast-plus/2.14.1                 intel-oneapi-dnn/2024.1.1              ncurses/5.9                         python/3.13.0             (D)
   boost/1.85.0                      intel-oneapi-dpl/2022.5.0              openblas/0.3.26                     r-magick/2.7.4_r/4.3.3
   bowtie2/2.5.2                     intel-oneapi-ipp/2021.11.0             openmpi/5.0.3                       r-magick/2.7.4_r/4.4.0    (D)
   cuda/11.4.4                       intel-oneapi-ippcp/2021.11.0           pandoc/2.19.2                       r-tidyverse/2.0.0_r/4.3.3
   cudnn/8.2.4.15-11.4               intel-oneapi-mkl/2024.0.0              paraview/5.12.0                     r/4.3.3
   fastqc/0.12.1                     intel-oneapi-mpi/2021.12.1             postgresql/15.2                     r/4.4.0                   (D)
   gcc/13.2.0                        intel-oneapi-tbb/2021.12.0             py-pip/23.1.2_python/3.10.13        rust/1.78.0
   gcc/14.2.0                 (D)    julia/1.9.3                            py-pip/23.1.2_python/3.11.7         texlive/20240312
   ghostscript/10.0.0                julia/1.10.2                           py-pip/23.1.2_python/3.12.5
   imagemagick/7.1.1-29              julia/1.11.0                    (D)    py-pip/23.1.2_python/3.13.0  (D)
   intel-oneapi-ccl/2021.12.0        llvm/18.1.3                            python/3.10.13

-------------------------------------------------------- /software/modules/commercial --------------------------------------------------------
   ansys/2024r2             gurobi/12.0.0         mathematica/14.1.0 (D)    sas/9.4m8                 stata/18
   gaussian/g16-a.03        mathematica/13.3.1    matlab/r2023b      (D)    schrodinger/2024-4 (g)
   gaussian/g16-b.01 (D)    mathematica/14.0.0    matlab/r2024a             stata/now          (D)
```


### Build Your Own

In addition to the software that we provide for you to use, it is perfectly OK for you to build and use your own software.

## Python

Different versions of Python3 are available on FarmShare both as system modules as well as system software. To see a listing run `module spider python`

We install commonly used Python packages (such as NumPy, SciPy) globally that are available when you load Python with the module command.

To install packages that are not already installed you can use `pip`

### pip

`pip` is available as a module on FarmShare. You will need to use the [`--user`](https://packaging.python.org/en/latest/tutorials/installing-packages/#installing-to-the-user-site) flag which places the package installation under your $HOME directory.

The example below shows how to install `pandas`:

``` shell
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
```

### Virtual Environments

Virtual environment is an isolated space for your Python projects, allowing you to manage dependencies separately for each project. You can create a personal Python environment that will persist each time you log in. There is no risk of packages being updated and allows greater control over your environment. 

To create python virtual environments, start by loading your preferred version of Python and use the `venv` command:

``` shell
ta5@rice-02:~$ module load python/3.13.0
ta5@rice-02:~$ 
ta5@rice-02:~$ python3 -m venv tutorial_env
ta5@rice-02:~$ source tutorial_env/bin/activate
(tutorial_env) ta5@rice-02:~$ 
(tutorial_env) ta5@rice-02:~$ python --version
Python 3.13.0
(tutorial_env) ta5@rice-02:~$ 
```

This will create a new virtual environment in the tutorial_env (the name inside the parentheses) subdirectory, and configure the current shell to use it as the default python environment.

Here you can install packages with `pip`:

``` shell
(tutorial_env) ta5@rice-02:~$
(tutorial_env) ta5@rice-02:~$ pip install pandas
```

Installing `setuptools` and `wheel` projects are useful to ensure you can also install from source archives:

``` shell
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
```

To deactivate or leave the environment `tutorial_env`:

``` shell
(tutorial_env) ta5@rice-02:~$ deactivate 
```

### Virtual Environment in [Slurm](slurm.md#slurm)

Python virtual environments can be used in slurm jobs. To submit a `sbatch` job using a venv environment, you can `source` the environment at the top of the sbatch script.

Sample python script that prints versions of packages:

``` shell
ta5@rice-02:~$ cat test.py 
import numpy as np
import pandas as pd
import sys

print(f"Python version = {sys.version}")
print(f"Numpy version = {np.version.version}")
print(f"Pandas version = {pd.__version__}")
```

To submit this script using the venv `tutorial_env` create a sbatch script to load the venv and run `test.py`:

``` shell
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
```

## JupyterLab

JupyterLab is [Project Jupyter's](https://jupyter.org/)  web-based development interface for Jupyter Notebooks. On FarmShare, it is available as an app on our [OnDemand](connecting.md#open-ondemand) interface and supports computation with Python 3.

### Accessing JupyterLab

Login in to [OnDemand](connecting.md#logging-in) and select **Interactive Apps > JupyterLab**

If you want to make one of your virtual environments available for use in Jupyter Notebooks, you can do so by creating a custom kernel. To do this, start an interactive terminal session and activate your environment (if you do not have an environment, refer to the sections [above](software.md/#virtual-environments) on how to do so). 

``` shell
ta5@rice-02:~$ source tutorial_env/bin/activate
(tutorial_env) ta5@rice-02:~$ pip install ipykernel
ta5@rice-02:~$ 
(tutorial_env) ta5@rice-02:~$ python3 -m ipykernel install --user --name tutorial_env
Installed kernelspec tutorial_env in /home/users/ta5/.local/share/jupyter/kernels/tutorial_env
```

Once you've successfully created your kernel, you should see your environment (custom kernel name) at the Notebook Launcher!

## Micromamba

Micromamba is a drop-in replacement for [Conda](https://conda.io/). It is a package management system and environment management system that allows users to create reproducible software environments.

!!! note "Micromamba User Guide"
    For complete reference, please refer to the official [Micromamba documentation](https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html)

### Setup

In an [interactive session](slurm.md#interactive-jobs), Load the `micromamba` module and initialize it with `micromamba shell init` command:

``` shell
ta5@iron-12:~$ module load micromamba
ta5@iron-12:~$ 

ta5@iron-12:~$ micromamba shell init -s bash
Modifying RC file "/home/users/ta5/.bashrc"
Generating config for root prefix "/home/users/ta5/.micromamba"
Setting mamba executable to: "/software/spack/opt/spack/linux-ubuntu22.04-x86_64_v3/gcc-13.2.0/micromamba-1.4.2-z67vm7a7mwsxyezqwchvviipkvgaujxm/bin/micromamba"
Adding (or replacing) the following in your "/home/users/ta5/.bashrc" file

# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba init' !!
export MAMBA_EXE="/software/spack/opt/spack/linux-ubuntu22.04-x86_64_v3/gcc-13.2.0/micromamba-1.4.2-z67vm7a7mwsxyezqwchvviipkvgaujxm/bin/micromamba";
export MAMBA_ROOT_PREFIX="/home/users/ta5/.micromamba";
__mamba_setup="$("$MAMBA_EXE" shell hook --shell bash --prefix "$MAMBA_ROOT_PREFIX" 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__mamba_setup"
else
    if [ -f "/home/users/ta5/.micromamba/etc/profile.d/micromamba.sh" ]; then
        . "/home/users/ta5/.micromamba/etc/profile.d/micromamba.sh"
    else
        export  PATH="/home/users/ta5/.micromamba/bin:$PATH"  # extra space after export prevents interference from conda init
    fi
fi
unset __mamba_setup
# <<< mamba initialize <<<

ta5@iron-12:~$ 
ta5@iron-12:~$ source .bashrc 
```

This initialized a shell (.bashrc) and a new root environment ("/home/users/ta5/.micromamba). 

### Installing packages 

After initializing micromamba, you can activate the base environment and install new packages, or create other environments. 

``` shell
ta5@iron-12:~$ micromamba env list
...

  Name      Active  Path                                     
───────────────────────────────────────────────────────────────
  base              /home/users/ta5/.micromamba              
ta5@iron-12:~$ 
ta5@iron-12:~$ micromamba activate
(base) ta5@iron-12:~$ micromamba install pytorch
...

(base) ta5@iron-12:~$ 
(base) ta5@iron-12:~$ python
Python 3.13.1 | packaged by conda-forge | (main, Jan 13 2025, 09:53:10) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> 
>>> exit()
(base) ta5@iron-12:~$ micromamba deactivate 
ta5@iron-12:~$ 
```

## Apptainer

Containers are isolated environments packaged together with an executable so that no additional installation or setup is required for running on any system.

[Apptainer](https://apptainer.org/) (formerly known as Singularity), is a container runtime that is available on FarmShare. Apptainer, and Linux containers in general allow sharing pipelines in a portable, reproducible way. You can create and customize your own containers, and because Apptainer also supports Docker containers, you have immediate access to a very large number of Apptainer and Docker containers available via repositories:

* [DockerHub](https://hub.docker.com/)
* [Sylabs](https://cloud.sylabs.io/library)

### Running Apptainer

This example will request an [interactive](slurm.md#interactive-jobs) session and use the Docker container [python/3.13.1-alpine3.21](https://hub.docker.com/_/python) from DockerHub. This container provides the latest release of python in an Alpine OS environment.

The first step is to request an interactive session with multiple cores:

``` shell
ta5@rice-04:~$ srun --partition=interactive --cpus-per-task=4 --qos=interactive --pty bash
ta5@iron-06:~$ 
```

Next create a directory `/scratch/users/$USER/lxd` to store all your images. Now load the `apptainer` module and pull the image:

``` shell
ta5@iron-06:~$ pwd
/home/users/ta5
ta5@iron-06:~$ 
ta5@iron-06:~$ cd /scratch/users/$USER
ta5@iron-06:/scratch/users/ta5$ 
ta5@iron-06:/scratch/users/ta5$ mkdir lxc
ta5@iron-06:/scratch/users/ta5$ 
ta5@iron-06:/scratch/users/ta5$ cd lxc/
ta5@iron-06:/scratch/users/ta5/lxc$ 
ta5@iron-06:/scratch/users/ta5/lxc$ module load apptainer
ta5@iron-06:/scratch/users/ta5/lxc$ 
ta5@iron-06:/scratch/users/ta5/lxc$ apptainer pull docker://python:3.13.1-alpine3.21
INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
Copying blob 2109cea89a77 done   | 
Copying blob 1f3e46996e29 done   | 
Copying blob b7c174cb6c8c done   | 
Copying blob 7486ee1cd0b3 done   | 
Copying config d5cb4e1bd6 done   | 
Writing manifest to image destination
2025/01/29 12:52:06  info unpack layer: sha256:1f3e46996e2966e4faa5846e56e76e3748b7315e2ded61476c24403d592134f0
2025/01/29 12:52:06  info unpack layer: sha256:7486ee1cd0b33ed93151ce1d3f73254a0987b484773adb31f37fe42bad78ba63
2025/01/29 12:52:06  info unpack layer: sha256:b7c174cb6c8cb4276eaff5e9ebfb56eb7124be68c8fcb4518cb5eb6b18245cf5
2025/01/29 12:52:07  info unpack layer: sha256:2109cea89a773ab9365659a6a63a1b7d8be1f7be6031112a429533bd7ba07f68
INFO:    Creating SIF file...
ta5@iron-06:/scratch/users/ta5/lxc$ 
ta5@iron-06:/scratch/users/ta5/lxc$ ls
python_3.13.1-alpine3.21.sif
ta5@iron-06:/scratch/users/ta5/lxc$ 
```

Once the image is downloaded, you can run the container using `apptainer run`:

``` shell
ta5@iron-06:/scratch/users/ta5/lxc$ apptainer run python_3.13.1-alpine3.21.sif 
Python 3.13.1 (main, Jan 24 2025, 19:30:15) [GCC 14.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> a = (1, 2, 3, 4, 5)
>>> x = sum(a)
>>> print(x)
15
>>> exit
ta5@iron-06:/scratch/users/ta5/lxc$ 
```

To launch a shell within the container using `apptainer shell`:

``` shell
ta5@iron-06:/scratch/users/ta5/lxc$ apptainer shell python_3.13.1-alpine3.21.sif 
Apptainer> cat /etc/issue 
Welcome to Alpine Linux 3.21
Kernel \r on an \m (\l)

Apptainer> exit
ta5@iron-06:/scratch/users/ta5/lxc$ 
ta5@iron-06:/scratch/users/ta5/lxc$ cat /etc/issue
Ubuntu 22.04.5 LTS \n \l
```
### Apptainer usage

The most common `apptainer` commands are outlined in the following table.

| Command | Description |
| --------------- | -------------- |
| `apptainer run <image>` | run predefined script within container |
| `apptainer exec <image>` | execute any command within container |
| `apptainer shell <image>` | run bash shell within container |
 
### Batch job example

In the example [above](#running-apptainer) Apptainer was running interactively. The example below shows how to run it as a [batch](slurm.md#batch-jobs) job to calculates the sum of one to five:

``` shell
ta5@iron-03:/scratch/users/ta5/lxc$ cat sum.py 
a = (1, 2, 3, 4, 5)
x = sum(a)
print(x)
```

To submit this script using apptainer, create a sbatch script to run `apptainer exec`: 

``` shell
ta5@rice-03:/scratch/users/ta5/lxc$ cat ~/tutorial_lxc.sh 
#!/bin/bash

#SBATCH --job-name=tutorial_lxc
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=4
#SBATCH --partition=normal

# Load apptainer
module load apptainer

# Run script with apptainer exec
apptainer exec python_3.13.1-alpine3.21.sif python sum.py

ta5@rice-03:/scratch/users/ta5/lxc$ 
ta5@rice-03:/scratch/users/ta5/lxc$ sbatch ~/tutorial_lxc.sh
Submitted batch job 299057

ta5@rice-03:/scratch/users/ta5/lxc$ cat slurm-299057.out
15
```

