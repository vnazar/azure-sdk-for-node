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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the DeploymentOperationProperties class.
 * @constructor
 * Deployment operation properties.
 *
 * @member {string} [provisioningState] The state of the provisioning.
 * 
 * @member {date} [timestamp] The date and time of the operation.
 * 
 * @member {string} [serviceRequestId] Deployment operation service request id.
 * 
 * @member {string} [statusCode] Operation status code.
 * 
 * @member {object} [statusMessage] Operation status message.
 * 
 * @member {object} [targetResource] The target resource.
 * 
 * @member {string} [targetResource.id] The ID of the resource.
 * 
 * @member {string} [targetResource.resourceName] The name of the resource.
 * 
 * @member {string} [targetResource.resourceType] The type of the resource.
 * 
 * @member {object} [request] The HTTP request message.
 * 
 * @member {object} [request.content] HTTP message content.
 * 
 * @member {object} [response] The HTTP response message.
 * 
 * @member {object} [response.content] HTTP message content.
 * 
 */
function DeploymentOperationProperties() {
}

/**
 * Defines the metadata of DeploymentOperationProperties
 *
 * @returns {object} metadata of DeploymentOperationProperties
 *
 */
DeploymentOperationProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeploymentOperationProperties',
    type: {
      name: 'Composite',
      className: 'DeploymentOperationProperties',
      modelProperties: {
        provisioningState: {
          required: false,
          serializedName: 'provisioningState',
          type: {
            name: 'String'
          }
        },
        timestamp: {
          required: false,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        serviceRequestId: {
          required: false,
          serializedName: 'serviceRequestId',
          type: {
            name: 'String'
          }
        },
        statusCode: {
          required: false,
          serializedName: 'statusCode',
          type: {
            name: 'String'
          }
        },
        statusMessage: {
          required: false,
          serializedName: 'statusMessage',
          type: {
            name: 'Object'
          }
        },
        targetResource: {
          required: false,
          serializedName: 'targetResource',
          type: {
            name: 'Composite',
            className: 'TargetResource'
          }
        },
        request: {
          required: false,
          serializedName: 'request',
          type: {
            name: 'Composite',
            className: 'HttpMessage'
          }
        },
        response: {
          required: false,
          serializedName: 'response',
          type: {
            name: 'Composite',
            className: 'HttpMessage'
          }
        }
      }
    }
  };
};

module.exports = DeploymentOperationProperties;