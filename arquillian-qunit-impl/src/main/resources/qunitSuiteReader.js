/**
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(window) {
    if (window.QUnit !== undefined) {
        
        window.qunitTestArr = window.qunitTestArr || [];

        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "");
            };
        }

        window.test = function(testName, expected, callback, async) {
            window.qunitTestArr
                    .push(((QUnit.config.currentModule && String(
                            QUnit.config.currentModule).trim() !== "") ? QUnit.config.currentModule
                            : "")
                            + ":"
                            + ((testName && testName.trim() !== "") ? testName
                                    : ""));
        };

        window.asyncTest = function(testName, expected, callback) {
            window.qunitTestArr
                    .push(((QUnit.config.currentModule && String(
                            QUnit.config.currentModule).trim() !== "") ? QUnit.config.currentModule
                            : "")
                            + ":"
                            + ((testName && testName.trim() !== "") ? testName
                                    : ""));
        };

        window.QUnit.test = function(testName, expected, callback, async) {
            window.qunitTestArr
                    .push(((QUnit.config.currentModule && String(
                            QUnit.config.currentModule).trim() !== "") ? QUnit.config.currentModule
                            : "")
                            + ":"
                            + ((testName && testName.trim() !== "") ? testName
                                    : ""));
        };

        window.QUnit.asyncTest = function(testName, expected, callback) {
            window.qunitTestArr
                    .push(((QUnit.config.currentModule && String(
                            QUnit.config.currentModule).trim() !== "") ? QUnit.config.currentModule
                            : "")
                            + ":"
                            + ((testName && testName.trim() !== "") ? testName
                                    : ""));
        };
        
    }
})(this);