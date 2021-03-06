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
 * The collection of tasks.
 */
class TaskListResult extends Array {
  /**
   * Create a TaskListResult.
   * @property {string} [nextLink] The URI that can be used to request the next
   * set of paged results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TaskListResult
   *
   * @returns {object} metadata of TaskListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TaskListResult',
      type: {
        name: 'Composite',
        className: 'TaskListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TaskElementType',
                  type: {
                    name: 'Composite',
                    className: 'Task'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = TaskListResult;
