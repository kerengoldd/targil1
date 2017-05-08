define({ "api": [  {    "type": "get",    "url": "/getAllChannels",    "title": "Get Channels",    "name": "Receive_all_channels_Exist",    "group": "Channels",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data",            "description": "<p>Array of Channel Objects</p>"          },          {            "group": "Success 200",            "type": "ObjectId",            "optional": false,            "field": "data.id",            "description": "<p>Id of the Object</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channelNumber",            "description": "<p>Number of the channel</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.description",            "description": "<p>Small Description of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.pricePerMonth",            "description": "<p>Monthly Cost of the Channel</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.officeAddress",            "description": "<p>Address of Channel Offices</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "data.topShows",            "description": "<p>Array of Top Shows Names in Channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.packageNum",            "description": "<p>Package/Category Index Number</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "data.cDate",            "description": "<p>Date when first added to Catalog</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Channels"  },  {    "type": "post",    "url": "/addNewChannel",    "title": "Add New Channel",    "name": "Set_a_New_Channel_in_Catalog",    "group": "Channels",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "channelNumber",            "description": "<p>Number of the channel</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Small Description of the channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "pricePerMonth",            "description": "<p>Monthly Cost of the Channel</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "officeAddress",            "description": "<p>Address of Channel Offices</p>"          },          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "topShows",            "description": "<p>Array of Top Shows Names in Channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "packageNum",            "description": "<p>Package/Category Index Number</p>"          }        ]      }    },    "examples": [      {        "title": "Example Request",        "content": "{\n  \"name\": \"Channel 10\",\n   \"channelNumber\": 10,\n   \"description\": \"The 2nd Most Popular Channel In Israel\",\n   \"pricePerMonth\": 10,\n   \"officeAddress\": \"Yehuda Halavi 20, Tel Aviv\",\n   \"activityHours\": \"24/7\",\n   \"topShows\": [\"Survival\",\"Hamakor\"],\n   \"packageNum\": 0\n }",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Single Channel Object</p>"          },          {            "group": "Success 200",            "type": "ObjectId",            "optional": false,            "field": "data._id",            "description": "<p>Id of the Object</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channelNumber",            "description": "<p>Number of the channel</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.description",            "description": "<p>Small Description of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.pricePerMonth",            "description": "<p>Monthly Cost of the Channel</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.officeAddress",            "description": "<p>Address of Channel Offices</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "data.topShows",            "description": "<p>Array of Top Shows Names in Channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.packageNum",            "description": "<p>Package/Category Index Number</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "data.cDate",            "description": "<p>Date when first added to Catalog</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Channels"  },  {    "type": "post",    "url": "/isRegToChannel/:id",    "title": "Channel Check",    "name": "Check_if_user_subscribed_to_channel",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "ObjectId",            "optional": false,            "field": "id",            "description": "<p>(IN ROUTE) ID String of the user</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "channelNumber",            "description": "<p>(IN BODY) Number of the channel</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "bool",            "optional": false,            "field": "data",            "description": "<p>TRUE if subscribed / FALSE if not subscribed</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/getAllUsers",    "title": "Get All Users",    "name": "Get_All_Users",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data",            "description": "<p>Array of User Objects</p>"          },          {            "group": "Success 200",            "type": "ObjectId",            "optional": false,            "field": "data._id",            "description": "<p>Id of the Object</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.firstName",            "description": "<p>Firstname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.lastName",            "description": "<p>Lastname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.address",            "description": "<p>Home Address of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "data.cDate",            "description": "<p>Date of Creation</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.totalMonthly",            "description": "<p>Monthly Price on Subscription</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data.channels",            "description": "<p>Array of Channels Registered at User</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.channels.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.price",            "description": "<p>Price of the channel.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.channelNumber",            "description": "<p>Number of the channel.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/getUserChannels/:id",    "title": "Get User Channels",    "name": "Get_User_Channels_by_ID",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "ObjectId",            "optional": false,            "field": "id",            "description": "<p>ID String of the user (in Route)</p>"          }        ]      }    },    "examples": [      {        "title": "Example Route",        "content": "http://localhost:3000/getUserChannels/590f7a33347ace5aa1090644",        "type": "json"      },      {        "title": "Example Response",        "content": "\n{\n \"code\": 200,\n \"data\": [\n   {\n     \"_id\": \"590f7a33347ace5aa1090644\",\n     \"channels\": [\n       {\n         \"name\": \"Channel 2\",\n         \"price\": 20,\n         \"channelNumber\": 22,\n         \"_id\": \"590f7a33347ace5aa1090647\"\n       },\n       {\n         \"name\": \"Channel 1\",\n         \"price\": 10,\n         \"channelNumber\": 11,\n         \"_id\": \"590f7a33347ace5aa1090646\"\n       },\n       {\n         \"name\": \"Channel 5\",\n         \"price\": 5,\n         \"channelNumber\": 55,\n         \"_id\": \"590f7a33347ace5aa1090645\"\n       }\n     ]\n   }\n ]\n}",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Array of Channels</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data.channels",            "description": "<p>Array of Channels Registered at User</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.channels.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.price",            "description": "<p>Price of the channel.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.channelNumber",            "description": "<p>Number of the channel.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Users"  },  {    "type": "post",    "url": "/addNewUser",    "title": "Set New User",    "name": "Set_New_User",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>Firstname of the User.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Lastname of the User.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>Home Address of the User.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Parameter",            "type": "Object[]",            "optional": false,            "field": "channels",            "description": "<p>Array of Channels Registered at User</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "channels.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "channels.price",            "description": "<p>Price of the channel.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "channels.channelNumber",            "description": "<p>Number of the channel.</p>"          }        ]      }    },    "examples": [      {        "title": "Example Request:",        "content": " {\n  \"firstName\":\"Gady\",\n  \"lastName\": \"Ezra\",\n  \"address\": \"Sample Address\",\n  \"email\": \"check@email.com\",\n  \"channels\": [{\n    \"name\": \"Channel 2\",\n    \"price\": 20,\n    \"channelNumber\": 22\n  },\n    {\n      \"name\": \"Channel 1\",\n      \"price\": 10,\n      \"channelNumber\": 11\n    },\n    {\n      \"name\": \"Channel 5\",\n      \"price\": 5,\n      \"channelNumber\": 55\n    }]\n}",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>Response Code (200 OK)</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Single User Object</p>"          },          {            "group": "Success 200",            "type": "ObjectId",            "optional": false,            "field": "data._id",            "description": "<p>Id of the Object</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.firstName",            "description": "<p>Firstname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.lastName",            "description": "<p>Lastname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.address",            "description": "<p>Home Address of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "data.cDate",            "description": "<p>Date of Creation</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.totalMonthly",            "description": "<p>Monthly Price on Subscription</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data.channels",            "description": "<p>Array of Channels Registered at User</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.channels.name",            "description": "<p>Name of the channel</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.price",            "description": "<p>Price of the channel.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "data.channels.channelNumber",            "description": "<p>Number of the channel.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/api.js",    "groupTitle": "Users"  }] });
