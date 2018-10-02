/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { CommandProfiles } from "../../../../src/profiles/CommandProfiles";
/**
 * Command Processor prepare response.
 * @export
 * @interface ICommandPrepared
 */
export interface ICommandPrepared {
    /**
     * The profile map object for all profiles loaded for commands.
     * @type {CommandProfiles}
     * @memberof ICommandPrepared
     */
    profiles: CommandProfiles;
}
