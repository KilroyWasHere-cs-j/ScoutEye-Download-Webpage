# ScoutEye configuration

As promised, ScoutEye is highly configurable. This page will explain how to configure ScoutEye.

Both ScoutEye Desktop and ScoutEye Universal are configured using the same .xml file. However, the method of exposing ScoutEye to the configuration file is different.

For ScoutEye Desktop, the configuration file is located in the same directory as the ScoutEye executable.

The file is called SettingsProfessional.xml or SettingsAmateur.xml depending on which level you are configuring.

SettingsProfessional.xml is the configuration file for the professional level.

and 

SettingsAmateur.xml is the configuration file for the amateur level.

Whilst it is possible to edit the file directly, it is recommended to use the ScoutEye configuration tool.

---


## ScoutEye configuration tool

The ScoutEye configuration tool is a tool that allows you to configure ScoutEye without having to edit the .xml file directly. It is recommended to use this tool to configure ScoutEye. It's designed to be simple and easy to use. Below we will explain how to use the tool.

Before the tool can be used it is best to have an understanding of the two levels that ScoutEye supports. The two levels are **Professional** and **Amateur**. Please read the docs covering this information for details on the two-level system.

### **Opening the tool**

The tool can be opened by double-clicking ScoutEye.exe. Once the welcome screen has been displayed, click the "Configuration" button located at the bottom of the screen. This will open the configuration tool.


### **Load configuration**

The first thing you will need to do is load the configuration file. To do this, click the "Load configuration" button. This will open a file browser. Navigate to the directory where the configuration file is located and select the configuration file you wish to load. Once the file has been selected, click "Open". The configuration file will now be loaded into the tool. Displayed in the fields on the screen will be the current configuration of the level you have loaded. A new level configuration can be loaded at any time by clicking the "Load configuration" button again. 

### **Clearing a configuration**

To clear the configuration, simply click the "Clear configuration" button. This will clear the configuration fields. This will not delete the configuration file. Please do not delete the configuration file. If you wish to delete the configuration file, please don't.

### **Making a change**

To make a change to the configuration, simply edit the fields you wish to change. Once you have made the change, click the "Save configuration" button. This will save the configuration to the configuration file. The configuration file will be saved to the same directory as the ScoutEye executable. The configuration file will be named SettingsProfessional.xml or SettingsAmateur.xml depending on which level you are configuring. Below is a list of allowable entries for the fields.

**Field labels** 

For the field to be useful a label is required the labels can be changed to anything you like. The label is what will be displayed on the screen above each editable field. For example, if you wish to change the label for the "balls scored" field to "cubes scored", simply enter "cubes scored" in the top most text field. The label will now be displayed as "cubes scored".

**Valid entries for the fields**

A valid field can be a list of left-8 charters separated by commas. For example *Low*, *Medium*, and *High*; is a valid field. The list can be as long as you like. The list can also be empty.

Given the above entry will yield a dropdown list with the following options:
Low,
Medium,
High

Another valid field entry is NUMFILL. This will fill a dropdown with all numbers from 0 to 1000. This is useful for fields that require a number. When this field is created it can either be navigated using the arrow keys or by typing the number you wish to select.

No other options are currently available. If you have any suggestions for other options, please let us know.


**Hiding fields**
It may not be that every field is used there for it is considered unwise to leave blank fields visible. To hide a field, simply check the "Hide field" checkbox. This will hide the field. To show the field again, simply uncheck the "Show field" checkbox. This will show the field again.

### **Saving the configuration**

To save the configuration, simply click the "Save configuration" button. This will save the configuration to the configuration file. The configuration file will be saved to the same directory as the ScoutEye executable. The configuration file will be named SettingsProfessional.xml or SettingsAmateur.xml depending on which level you are configuring.


---


Each level will need to be configured separately. The configuration tool does not need to be opened twice simply reselect the configuration file you wish to edit and make the changes. Once the changes have been made, click the "Save configuration" button. This will save the configuration to the configuration file.