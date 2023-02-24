import shutil
import os
from datetime import date

def debug(s):
    print(s)


if __name__ == "__main__":
    today = date.today()
    
    debug("Zipping")
    shutil.make_archive("ScoutEye-web-build" + str(today), 'zip',  os.getcwd())
    debug("Zipped")
    debug(today)