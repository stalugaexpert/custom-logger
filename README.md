# Custom logger

## Why it might be helpful

This is a basic console.log abstraction, which removes console.logs when NODE_ENV process variable is set to 'production'. 

By default configuration, only logger.error is shown on production - warn and log are hidden.

For example, when using some custom bundler and can't edit its behaviour to remove logs on production, this package might be helpful.

## Basic usage

```
import { logger } from 'custom-logger-prod'

logger.log('Test log')
logger.warn('Test warn')
logger.error('Test error', someObject)
```

