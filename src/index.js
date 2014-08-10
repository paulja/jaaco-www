// -----------------------------------------------------------------
//  index.js
//
//  jaaco-www
//  Copyright 2014. Paul Jackson. All rights reserved.
//
//  Paul Jackson <pjackson@gmail.com>
//

// -----------------------------------------------------------------
//  Dependencies

var
  connect = require('connect'),
  static = require('serve-static'),
  logger = require('morgan');
  require('colors');


// -----------------------------------------------------------------
//  Main

var port = process.env.PORT || 3000;
connect()
  .use(logger('dev'))
  .use(static(__dirname + '/public'))
  .listen(port);

console.log('\nJaaco server listening on port %s\n'.cyan, port);
