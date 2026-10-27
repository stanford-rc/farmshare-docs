# Using Software

FarmShare provides a selection of free and commercial software ready for users to run; if there is a software application not currently available but of general interest to the community we may be able to install it upon request. Software may be installed using standard Debian (`.deb`) packages, as environment modules, or by individual users for their own, private use.

### Packages

The operating system and commonly available software tools are installed using packages from the standard [Ubuntu repositories](https://packages.ubuntu.com/noble/). Some additional software is sourced from trusted, third-party repositories maintained by the software vendor.

Packaged software is installed locally and already present in the default environment at login and can run immediately without any special setup: just run the command!

``` shell
$  python3 --version
Python 3.12.3
```

### Modules

In order to provide specialized software applications for high-performance computing, or to provide more recent or specially optimized versions of software otherwise installed using a package, FarmShare uses loadable *environment modules*.

Modularized software is built by the FarmShare support team and installed on shared, network storage. In some cases, more than one version of an application may be installed, and different versions of the same application may be built or optimized in different ways. This allows users to switch between the various versions provided according to their own, specific needs.

To use such software the corresponding module must first be *loaded*. Loading a module modifies the current user environment (for example, by updating the `$PATH` variable) to expose the software.

``` shell
$ module load python
$ python3 --version
Python 3.14.2
```

#### Module Usage

!!! info "Lmod"
    FarmShare uses the Lmod implementation of environment modules. Run `module help` for usage information, or refer to the [documentation](https://lmod.readthedocs.io/en/latest/010_user.html) for a complete reference.

To view the available modules, run `module avail` (or `module overview`). Some modules may be listed with certain *properties*.

* `S` indicates the module is sticky, requiring `--force` to unload or purge
* `L` indicates a module is currently loaded
* `D` indicates which module will be loaded by default when multiple versions are provided (usually the most recent version available)
* `g`: indicates software built with GPU acceleration and intended to run on GPU nodes

To search for a module by name, use `module spider`, or use `module keyword` to search for arbitrary strings in module names and descriptions.
    
The most common `module` commands are outlined in the following table. `module` commands may be shortened using the `ml` alias. 

| Module command | Short version | Description |
| --------------- | -------------- | -------------- |
| `module avail` | `ml av` | List available software |
| `module spider` | `ml spider` | Search for particular software by name|
| `module keyword` | `ml key` | Search for a keyword in module names and descriptions|
| `module whatis` | `ml whatis` | Display detailed information about a module |
| `module help` | `ml help` | Display module-specific help |
| `module load` | `ml` | Load a module |
| `module unload` | `ml -` | Unload a module |
| `module purge` | `ml purge` | Unload all currently loaded modules |
| `module save` | `ml save` | Save the state of currently loaded modules in a named collection |
| `module restore` | `ml restore` | Restore the state of a named collection |

### Build or Install Your Own Software

In addition to the software provided, users may build and/or install their own software. Classes (and groups) are welcome to do so, too, in the spaces provided for them.

#### Package Managers

A convenient way to install software is using a local *package manager* like [Spack](https://spack.readthedocs.io/en/latest/), [Pixi](https://pixi.prefix.dev/latest/), or [Micromamba](https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html).

#### Virtual Environments

Some programming languages provide a way for users to install applications, libraries, and other dependencies, or to create self-contained *virtual environments* for development. Virtual environments are safe, convenient, and highly recommended for work on FarmShare!

##### Python

Python provides a standard way to create virtual environments (`python3 -m venv`) and install and manage Python libraries (`pip3`). On FarmShare, however, we usually recommend using [uv](https://docs.astral.sh/uv/) for this purpose (`uv venv`, `uv pip`, `uv tools`). uv is very fast, uses disk space efficiently, can create virtual environments using arbitrary versions of Python, and can even manage some environments created by other tools, making it easy to adopt.

``` shell
$ uv venv example
Using CPython 3.14.0
Creating virtual environment at: example
Activate with: source example/bin/activate
$ source example/bin/activate
(example) $ uv pip install numpy
Using Python 3.14.0 environment at: example
Resolved 1 package in 699ms
Prepared 1 package in 4.03s
Installed 1 package in 2.25s
 + numpy==2.5.2
(example) $ deactivate
$ 
```

To submit a batch job using a virtual environment, make sure to `source` the `activate` script for the environment before running `python3`. Virtual environments can also be installed as *kernels* for use in Jupyter notebooks and accessed from the JupyterLab app on [FarmShare OnDemand](https://ondemand.farmshare.stanford.edu/).

``` shell
$ source example/bin/activate
(example) $ uv pip install ipykernel
Using Python 3.14.0 environment at: example
Resolved 29 packages in 563ms
Prepared 27 packages in 15.24s
Installed 29 packages in 14.48s
...
(example) $ python3 -m ipykernel install --user --name example
Installed kernelspec example in /home/users/sunetid/.local/share/jupyter/kernels/example
```

##### R

R provides a standard way to install R packages, `install.packages()`, and the `renv` package a way to manage virtual environments for development.

``` r
install.packages("renv")
```

Please note that the site library for R is not writable, so users must use a *personal library* instead. If you have not yet set up a personal library you will be prompted to do so the first time you attempt to install a package while running `R` interactively.

##### Pixi and Micromamba

Pixi and Micromamba can also be used to create virtual environments for Python and R, and are especially useful when a project may require non-native dependencies (for example, an R package that is implemented by a library written in C).

#### Containers

Containers are isolated environments that encapsulate operating system and user software, dependencies, and user code or applications, often packaged together as an executable so that no additional installation or setup is required for running on any almost any Linux system. Containers are a good way to preserve and share entire research pipeplines in a portable and reproducible way.

##### Apptainer

FarmShare provides a module for the common container runtime [Apptainer](https://apptainer.org/), formerly known as Singularity. Apptainer supports creating, customizing, and running user containers, or containers from public image registry like [DockerHub](https://hub.docker.com/) and [Sylabs](https://cloud.sylabs.io/library).

The most common `apptainer` commands are outlined in the following table.

| Command | Description |
| --------------- | -------------- |
| `apptainer pull` | downloads or builds a container from a compatible image registry |
| `apptainer run` | execute the container's predefined `runscript` |
| `apptainer exec` | execute an arbitrary command within a container |
| `apptainer shell` | run and interactive `bash` shell within a container |

##### Podman

The [Podman](https://docs.podman.io/en/latest/) container runtime is also available on FarmShare. Podman provides an interface that will be familiar to users of Docker and can often serve as a drop-in replacement for it.
