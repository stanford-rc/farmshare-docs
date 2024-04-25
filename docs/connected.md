# Getting Connected

## SSH on Linux and macOS

SSH provides a secure, remote terminal connection to the login nodes. There are a number of rice servers providing login service (e.g., rice-01, rice-02); the easiest way to connect is using the load-balanced name, *login.farmshare.stanford.edu*, which will select one for you according to recent utilization.


Simply open up your favorite terminal program (on macOS you can use the built-in Terminal application or something like iTerm) and run the ssh command like so, replacing sunetid with your own SUNet ID:

~~~
ssh sunetid@login.farmshare.stanford.edu
~~~

Depending on your environment and configuration you may be prompted for your SUNet ID password, and you'll need to complete your login using [two-step authentication](https://uit.stanford.edu/service/webauth/twostep).

## SSH on Windows

Windows does not have a built-in SSH client, but a number are available from third parties:

### MobaXterm

[MobaXterm](http://mobaxterm.mobatek.net/) is an SSH client with a built-in X server, making remote display extremely convenient, and the Home Edition is free for personal use.

### PuTTY

[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) is a popular, freely available SSH client for Windows. The default settings are appropriate for most users, so all you need to do is specify the host name and click the Open button to connect. Aat the login as: prompt, enter your SUNet ID, and authenticate by password if asked. A number of configuration options are available, and PuTTY allows you to customize your connection settings and save them as a session. The next time you start the application you can load the saved configuration by selecting the desired session and clicking the Load button.

PuTTY supports GSSAPI authentication as of version 0.61 and will automatically use your existing Kerberos credentials for login, if available. You may also want to enable Kerberos ticket forwarding by checking the Connection → SSH → Auth → GSSAPI → Allow GSSAPI credential delegation box.

## Mobile Shell (Mosh)

[Mosh](https://mosh.org/) is an alternative to SSH for Linux and macOS clients. It uses SSH for authentication, so you may want to review the suggested SSH configuration above. Mosh has some advantages, including predictive display, which can be useful on high-latency connections, and improved network resiliency. Mosh connections can persist when you switch networks and can even survive putting your computer to sleep.

# OnDemand

[Open OnDemand](https://ondemand.farmshare.stanford.edu/) is a browser based interface to FarmShare. OnDemand offers terminal, file manager and editor and access to a desktop session and GUI applications right from your web browser.


