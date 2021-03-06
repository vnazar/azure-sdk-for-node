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
 * Incoming video stream out of synch event data.
 *
 */
class MediaLiveEventIncomingVideoStreamsOutOfSyncEventData {
  /**
   * Create a MediaLiveEventIncomingVideoStreamsOutOfSyncEventData.
   * @member {string} [firstTimestamp] Gets the first timestamp received for
   * one of the quality levels.
   * @member {string} [firstDuration] Gets the duration of the data chunk with
   * first timestamp.
   * @member {string} [secondTimestamp] Gets the timestamp received for some
   * other quality levels.
   * @member {string} [secondDuration] Gets the duration of the data chunk with
   * second timestamp.
   * @member {string} [timescale] Gets the timescale in which both the
   * timestamps and durations are represented.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MediaLiveEventIncomingVideoStreamsOutOfSyncEventData
   *
   * @returns {object} metadata of MediaLiveEventIncomingVideoStreamsOutOfSyncEventData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MediaLiveEventIncomingVideoStreamsOutOfSyncEventData',
      type: {
        name: 'Composite',
        className: 'MediaLiveEventIncomingVideoStreamsOutOfSyncEventData',
        modelProperties: {
          firstTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'firstTimestamp',
            type: {
              name: 'String'
            }
          },
          firstDuration: {
            required: false,
            readOnly: true,
            serializedName: 'firstDuration',
            type: {
              name: 'String'
            }
          },
          secondTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'secondTimestamp',
            type: {
              name: 'String'
            }
          },
          secondDuration: {
            required: false,
            readOnly: true,
            serializedName: 'secondDuration',
            type: {
              name: 'String'
            }
          },
          timescale: {
            required: false,
            readOnly: true,
            serializedName: 'timescale',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MediaLiveEventIncomingVideoStreamsOutOfSyncEventData;
