'use strict';

/**
 * wp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wp.wp');
