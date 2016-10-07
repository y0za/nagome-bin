.PHONY: all install clean

NAGOME_VERSION ?= $(shell node -p 'require("./package.json").version')
URL_BASE ?= https://github.com/diginatu/nagome/releases/download/v$(NAGOME_VERSION)/
DESTINATION ?= bin/v$(NAGOME_VERSION)/

all: clean install

clean:
	rm -rf bin/*

install:
	mkdir -p $(DESTINATION)
	curl -L $(URL_BASE){nagome_darwin_amd64} -o "$(DESTINATION)#1"
	curl -L $(URL_BASE){nagome_linux_amd64} -o "$(DESTINATION)#1"
	curl -L $(URL_BASE){nagome_windows_amd64.exe} -o "$(DESTINATION)#1"
