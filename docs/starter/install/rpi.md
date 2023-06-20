# FedML Installation on Raspberry Pi

## Run FedML with Docker (Recommended)
- Pull FedML RPI docker image
``` sh
docker pull fedml/fedml:latest-raspberrypi4-64-py37
```

- Run Docker with "fedml login"
``` sh
docker run -t -i fedml/fedml:latest-raspberrypi4-64-py37 /bin/bash

root@8bc0de2ce0e0:/usr/src/app# fedml login 299
```


Note please change the value of `$YOUR_FEDML_ACCOUNT_ID` to your own.

## Install Docker on Your Raspberry Pi (skip this if you already installed Docker)
1. Update and upgrade your apt-get package tool

``` sh
sudo apt-get update && sudo apt-get upgrade
```

2. Download Docker installation script
``` sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

3. Execute the installation script
``` sh
sudo sh get-docker.sh
```

4. Add a non-root user to the Docker group
``` sh
sudo usermod -aG docker [your-user]
```

## Install with pip

``` sh
pip install fedml
source ~/.profile  ## run this command if '/home/user/.local/bin' is not on PATH' after installation
```
