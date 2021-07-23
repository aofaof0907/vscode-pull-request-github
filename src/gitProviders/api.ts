<<<<<<< HEAD
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { API } from '../api/api';
import { CredentialStore } from '../github/credentials';
import { BuiltinGitProvider } from './builtinGit';
import { LiveShareManager } from './vsls';

export function registerLiveShareGitProvider(apiImpl: API): LiveShareManager {
	const liveShareManager = new LiveShareManager(apiImpl);
	return liveShareManager;
}

export async function registerBuiltinGitProvider(
	_credentialStore: CredentialStore,
	apiImpl: API,
): Promise<vscode.Disposable | undefined> {
	const builtInGitProvider = await BuiltinGitProvider.createProvider();
	if (builtInGitProvider) {
		apiImpl.registerGitProvider(builtInGitProvider);
		return builtInGitProvider;
	}
}
=======
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { API } from '../api/api';
import { LiveShareManager } from './vsls';
import { BuiltinGitProvider } from './builtinGit';
import { GithubGitProvider } from './githubGit';
import { CredentialStore } from '../github/credentials';

export function registerBuiltinGitProvider(apiImpl: API): vscode.Disposable {
	const builtInGitProvider = new BuiltinGitProvider();
	apiImpl.registerGitProvider(builtInGitProvider);
	return builtInGitProvider;
}

export function registerGithubGitProvider(credentialStore: CredentialStore, apiImpl: API): vscode.Disposable {
	const githubGitProvider = new GithubGitProvider(credentialStore);
	apiImpl.registerGitProvider(githubGitProvider);
	return githubGitProvider;
}

export function registerLiveShareGitProvider(apiImpl: API): LiveShareManager {
	const liveShareManager = new LiveShareManager(apiImpl);
	return liveShareManager;
}
>>>>>>> origin/alexr00/browser
