/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Long term policy schedule.
 *
 * @extends models['SchedulePolicy']
 */
class LongTermSchedulePolicy extends models['SchedulePolicy'] {
  /**
   * Create a LongTermSchedulePolicy.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LongTermSchedulePolicy
   *
   * @returns {object} metadata of LongTermSchedulePolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LongTermSchedulePolicy',
      type: {
        name: 'Composite',
        className: 'LongTermSchedulePolicy',
        modelProperties: {
          schedulePolicyType: {
            required: true,
            serializedName: 'schedulePolicyType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LongTermSchedulePolicy;