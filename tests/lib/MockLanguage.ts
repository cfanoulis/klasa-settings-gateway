import { Language, LanguageStore } from 'klasa';
import type { SchemaEntry } from '../../src';

export class MockLanguage extends Language {
	public constructor(store: LanguageStore, file: string[], directory: string) {
		super(store, file, directory, { name: 'en-US' });
		this.language = {
			DEFAULT: (key: string, ...args: unknown[]): string => `[DEFAULT]: ${key} ${args.join(' ')}`,
			SETTING_GATEWAY_KEY_NOEXT: ({ path }: { path: string }): string => `[SETTING_GATEWAY_KEY_NOEXT]: ${path}`,
			SETTING_GATEWAY_CHOOSE_KEY: ({ keys }: { keys: string[] }): string => `[SETTING_GATEWAY_CHOOSE_KEY]: ${keys.join(' ')}`,
			SETTING_GATEWAY_UNCONFIGURABLE_FOLDER: '[SETTING_GATEWAY_UNCONFIGURABLE_FOLDER]',
			SETTING_GATEWAY_UNCONFIGURABLE_KEY: ({ path }: { path: string }): string => `[SETTING_GATEWAY_UNCONFIGURABLE_KEY]: ${path}`,
			SETTING_GATEWAY_MISSING_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_MISSING_VALUE]: ${entry.path} ${value}`,
			SETTING_GATEWAY_DUPLICATE_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_DUPLICATE_VALUE]: ${entry.path} ${value}`,
			SETTING_GATEWAY_INVALID_FILTERED_VALUE: ({ entry, value }: { entry: SchemaEntry; value: string }): string =>
				`[SETTING_GATEWAY_INVALID_FILTERED_VALUE]: ${entry.path} ${value}`,
			RESOLVER_MINMAX_EXACTLY: ({ name, value, inclusive }: { name: string; value: number; inclusive: boolean }): string =>
				`[RESOLVER_MINMAX_EXACTLY]: ${name} ${value} ${inclusive}`,
			RESOLVER_MINMAX_BOTH: ({
				name,
				minimum,
				maximum,
				inclusive
			}: {
				name: string;
				minimum: number;
				maximum: number;
				inclusive: boolean;
			}): string => `[RESOLVER_MINMAX_BOTH]: ${name} ${minimum} ${maximum} ${inclusive}`,
			RESOLVER_MINMAX_MIN: ({ name, minimum, inclusive }: { name: string; minimum: number; inclusive: number }): string =>
				`[RESOLVER_MINMAX_MIN]: ${name} ${minimum} ${inclusive}`,
			RESOLVER_MINMAX_MAX: ({ name, maximum, inclusive }: { name: string; maximum: number; inclusive: number }): string =>
				`[RESOLVER_MINMAX_MAX]: ${name} ${maximum} ${inclusive}`
		};
	}
}
