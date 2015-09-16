# StandUp

![StandUp icon](http://cdns2.freepik.com/free-photo/_318-62541.jpg =250x)

##Overview

**Standup**, the random presenter picker and timer for standups and presentations.

Have you ever been running a meeting, classroom or a daily standup and no one will volunteer to go next? Or do you get tired of picking the same presenters every time in the same order? Well, **StandUp** is here to help!

##Installation

**Standup** is a web application, it uses JQuery to access objects on the page and update them.

**TODO**

##Configuration

Currently, the index.html file has a configuration section and those are commented on what they do.

userOff is the image that is displayed for a user if there is not one in the json file.

userOn is the image that is displayed for a user when it their turn.


iconSize is the size of the images for userOff and userOn.


jsonFile is the file that contains the names, y:times, userOn and userOff attributes.


initialHeader is the initial header of the app page.


subHeader 

lastHeader

resetHeader

backgroundColor

textColor

onColor

totalTime

maxTime; //now calculated

maxTimeColor

warnTime; //now calculated

warnTimeColor = '#FFCC00';


##JSON Structure

```
    {"name":"Bob","y":0,"iconOn":"images/clint.jpg","iconOff":"images/bob_talk.jpg"},
    {"name":"Linda","y":0,"iconOn":"images/don.png","iconOff":"images/linda_talk.png"},
    {"name":"Ed","y":0,"iconOn":"images/ed.gif","iconOff":"images/ed_talk.gif"},
    {"name":"Jeff","y":0,"iconOn":"http://jeff.gif","iconOff":"images/jeff_talk.gif"},
    {"name":"Charlie","y":0,"iconOn":"images/charlie.png","iconOff":"images/charlie_on.png"},
    {"name":"Becky","y":0,"iconOn":"images/becky.jpg","iconOff":"images/becky_on.jpg"}
]

```

##RoadMap





