---
title: "How To Setup Windows Terminal For Professional Software Development"
publishedAt: 2023-06-07
description: "Lets face it the windows command shell sucks."
slug: "dev-terminal-setup"
isPublish: true
---

If you're a developer in 2023 still using the Windows CMD for your daily tasks, you're probably feeling like the last kid picked for the dodgeball team in PE class. While your friends on Linux and macOS are running around with their fancy terminals, you're left alone in the corner with your basic command prompt. But don't despair! With a bit of work, we can turn this situation around and make your terminal the envy of colleagues. So buckle up, and let's the Windows Terminal from zero to hero!

### Install and Configure Nerd Font - Hack

First things first, let's give your terminal a makeover. We'll start by installing a Nerd Font. Nerd Fonts takes popular fonts and adds a bunch of glymphs. We'll be using Hack for this tutorial.

- Download Hack Nerd Font from the [Nerd Fonts Github page](https://github.com/ryanoasis/nerd-fonts/releases)
- Extract the zip file and install the font by right-clicking on the `.ttf` file and selecting "Install"

<!-- New Image -->

![terminal](https://i.ibb.co/X4PMgBV/1.png)

Now, let's configure the Windows Terminal to use this font.

- Open Windows Terminal and go to Settings (the gear icon).
- Under "Profile" -> "Defaults", find the "Font Face" setting and replace it "Hack Nerd Font":

![terminal](https://i.ibb.co/sF8b2Mm/22.png)

### Install PowerShell v7+ and Configure Terminal Appearance

In order for our terminal to support modern tools we need to upgrade to a Powershell v7+.

- Open Microsoft Store and Search for Powershell and install it

![terminal](https://i.ibb.co/8033ZVV/2.png)

Now if you successfully installed Powershell Go back to the Terminal App and close it.

Now open the terminal app and type `pwsh`, if powershell is correctly you should the following:

![terminal](https://i.ibb.co/d5QXZH8/3.png)

If the above shows, we are doing good so far.

Now Lets Configure the looks of our terminal, firstly we are going to give it transparency effects.

- Click the drop down icon besides the open new button denoted by a `+` and open settings.
- Under "Profile" -> "Defaults" -> "Additional Settings" -> "Appearance" -> "Transparency" and set the background opacity to around 50% or until it looks good for you.
- Below the Transparency section find the "Enable acrylic material" switch and toggle it on.
- You can also experiment with other options like "Color scheme", "Font size" etc.
- Now save and go back to the PowerShell tab and it should like something like this:

![terminal](https://i.ibb.co/LtV7xHK/4.png)

### Install Scoop

Next, we're going to install Scoop, a command-line installer for Windows. Trust me, it's like the ice cream truck of software installation.

- Open PowerShell and run the following commands to install Scoop:

```shell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex
```

### Install and Configure Starship.rs

Now let's pimp your prompt with Starship.rs. Its like your terminal a new paint job.

- Install Starship via Scoop by running `scoop install starship`.
- Add the following to the end of your PowerShell configuration (find it by running `$PROFILE`):

```shell
Invoke-Expression (&starship init powershell)
```

- Save The file and restart the terminal. Now to to any project folder and you should see something like this:

![terminal](https://i.ibb.co/tzHcGwd/5.png)

### Install and Configure Addons

#### **Terminal Icons**

Let's add some bling to your terminal with Terminal icons. This addon will add icons to your files and folders. It's like putting spinners on your terminals wheels.

- Install Terminal Icons via PowerShell by running `Install -Module -Name Terminal-Icons -Repository PSGallery`.
- Refresh the terminal and type `Get-ChildItem`, you should a nice folder structure like this:

![terminal](https://i.ibb.co/3mPHYGV/6.png)

#### **Set Aliases**

Aliases are like nicknames for your commands. They can save you typing and make your commands easier to remember.

- Open your shell's config file again.
- Add your aliases. Earlier on we used the `Get-ChildItem` command. Instead of typing that over and over, we alias `ll` to `Get-ChildItem`, add the following line:

```shell
Set-Alias -Name ll -Value Get-ChildItem.
```

3. Also I would like to alias `g` to `git`, so add the following line:

```shell
Set-Alias -Name g -Value git
```

So here is the final result:

![Alt text](https://i.ibb.co/Y8pQ9DQ/7.png)
