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

/**
 * A list of job executions.
 */
class JobExecutionListResult extends Array {
  /**
   * Create a JobExecutionListResult.
   * @property {string} [nextLink] Link to retrieve next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobExecutionListResult
   *
   * @returns {object} metadata of JobExecutionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobExecutionListResult',
      type: {
        name: 'Composite',
        className: 'JobExecutionListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobExecutionElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobExecution'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobExecutionListResult;
