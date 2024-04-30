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

FarmShare 2 runs Ubuntu 22.04 LTS, which means almost anything in the [Ubuntu Jammy package repository](http://packages.ubuntu.com/jammy) is available to be installed.

## Modules

To provide up-to-date software, we use modules. Modularized software lives in shared, network-connected storage, and was either built by SRCC (like with R) or was provided a software vendor (like with SAS). To see a listing of available software, run the module available command:

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
