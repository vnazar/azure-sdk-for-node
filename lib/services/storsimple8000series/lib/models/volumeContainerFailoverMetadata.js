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
 * The metadata of the volume container, that is being considered as part of a
 * failover set.
 *
 */
class VolumeContainerFailoverMetadata {
  /**
   * Create a VolumeContainerFailoverMetadata.
   * @member {string} [volumeContainerId] The path ID of the volume container.
   * @member {array} [volumes] The list of metadata of volumes inside the
   * volume container, which contains valid cloud snapshots.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VolumeContainerFailoverMetadata
   *
   * @returns {object} metadata of VolumeContainerFailoverMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VolumeContainerFailoverMetadata',
      type: {
        name: 'Composite',
        className: 'VolumeContainerFailoverMetadata',
        modelProperties: {
          volumeContainerId: {
            required: false,
            serializedName: 'volumeContainerId',
            type: {
              name: 'String'
            }
          },
          volumes: {
            required: false,
            serializedName: 'volumes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VolumeFailoverMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'VolumeFailoverMetadata'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VolumeContainerFailoverMetadata;
