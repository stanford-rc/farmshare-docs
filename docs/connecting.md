# Getting Connected

## SSH

SSH provides a secure, remote terminal connection to the login nodes. To connect use the load-balanced name, *login.farmshare.stanford.edu* which will select of the login nodes based on load and utilization.

FarmShare implements Stanford's [Minimum Security Standards](https://uit.stanford.edu/guide/securitystandards) policy which requires [two-step authentication](https://uit.stanford.edu/service/authentication/twostep) to access the cluster.

!!! example "login"
    ssh SUNetID@login.farmshare.stanford.edu
    
### Host keys

For those who wish to verify the new FarmShare host keys when connecting, use the following fingerprints:

!!! caution "SHA256 hash"
    SHA256:bKb1Znir/1tOg+TMyALDYWeK0lclsulriDN8aOvWteU (ED25519)
    SHA256:o5E5OOkaxwF+CzKT5A2/DNSmDzljTYs/a1V7Fm6ssSw (RSA)

### Login

Users on Linux, macOS, and Windows can use the built-in Terminal application and run `ssh`. Replace SUNetID with your own SUNet ID:

The example below shows how to login using your SUNet ID and password along with two-step authentication. To logout, type `exit` or `logout`:

``` shell
$ ssh ta5@login.farmshare.stanford.edu
ta5@login.farmshare.stanford.edu's password: 
(ta5@login.farmshare.stanford.edu) Duo two-factor login for ta5

Enter a passcode or select one of the following options:

 1. Duo Push to XXX-XXX-XXXX
 2. Phone call to XXX-XXX-XXXX
 3. SMS passcodes to XXX-XXX-XXXX

Passcode or option (1-3): 1
Success. Logging you in...
Success. Logging you in...
Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 6.8.0-50-generic x86_64)

Stanford Research Computing (https://srcc.stanford.edu/) -----------------------

FarmShare (https://docs.farmshare.stanford.edu/)

...

ta5@rice-02:~$ 
ta5@rice-02:~$ 
ta5@rice-02:~$ exit
logout
Shared connection to login.farmshare.stanford.edu closed.
```

## Other SSH clients

### PuTTY

[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) is a popular, freely available SSH client for Windows. The default settings are appropriate for most users, so all you need to do is specify the host name and click the Open button to connect.

### MobaXterm

[MobaXterm](http://mobaxterm.mobatek.net/) is an SSH client with a built-in X server, making remote display extremely convenient, and the Home Edition is free for personal use.

### Mobile Shell (Mosh)

[Mosh](https://mosh.org/) is an alternative to SSH for Linux and macOS clients. It uses SSH for authentication, so you may want to review the suggested SSH configuration above. Mosh has some advantages, including predictive display, which can be useful on high-latency connections, and improved network resiliency. Mosh connections can persist when you switch networks and can even survive putting your computer to sleep.

## Open OnDemand

[Open OnDemand](https://openondemand.org/) is a browser based interface to FarmShare. Open OnDemand offers terminal, file manager, editor, desktop, and GUI applications right from your web browser!

### Logging in

!!! important
    If this is your very first time connecting to Farmshare you won't be able to run apps/jobs until your Slurm account is created. This is done when you first connect to a [login](#login) node. You can do that from Ondemand by selecting the Clusters drop down > [FarmShare Shell Access](https://ondemand.farmshare.stanford.edu/pun/sys/shell/ssh).**

To use the FarmShare OnDemand interface:

* Connect to [https://ondemand.farmshare.stanford.edu](https://ondemand.farmshare.stanford.edu)
* Use your SUNetID credentials and go through the two-step authentication process
