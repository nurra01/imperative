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

import {ITestEnvironment} from "../../../../../../__src__/environment/doc/response/ITestEnvironment";
import {SetupTestEnvironment} from "../../../../../../__src__/environment/SetupTestEnvironment";
import {runCliScript} from "../../../../../../src/TestUtil";
import {ICommandResponse} from "../../../../../../../packages/cmd";
import {Imperative} from "../../../../../../../packages/imperative";

// Test Environment populated in the beforeAll();
let TEST_ENVIRONMENT: ITestEnvironment;

describe("cmd-cli gen-help example-test", () => {
    // Create the unique test environment
    beforeAll(async () => {
        TEST_ENVIRONMENT = await SetupTestEnvironment.createTestEnv({
            cliHomeEnvVar: "CMD_CLI_CLI_HOME",
            testName: "cmd_cli_gen_help_example_test"
        });
    });

    it("should display the help with allowable options", () => {
        const response = runCliScript(__dirname + "/__scripts__/help_with_example_test.sh", TEST_ENVIRONMENT.workingDir);
        expect(response.stderr.toString()).toBe("");
        expect(response.status).toBe(0);
        expect(response.stdout.toString()).toMatchSnapshot();
    });
});
