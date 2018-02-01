/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const test = require(`ava`);

const Storage = require('@google-cloud/storage');
const storage = new Storage();
const bucketName = 'please-delete-this';

test(`can access GCP`, async (t) => {
  await storage
    .createBucket(bucketName)
    .then(() => {
      console.log(`Bucket ${bucketName} created.`);
      t.pass();
    })
    .catch(err => {
      console.log(err);
      t.fail();
    });
});