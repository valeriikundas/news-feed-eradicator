import { SettingsActionObject } from '../settings/action-types';
import { SettingsState } from '../settings/reducer';

export enum ActionType {
	SELECT_NEW_QUOTE = 'SELECT_NEW_QUOTE',
	QUOTE_ADD_BULK = 'QUOTE_ADD_BULK',
	QUOTE_EDIT = 'QUOTE_EDIT',
	QUOTE_CURRENT_SET = 'QUOTE_CURRENT_SET',
	QUOTE_SAVE_CLICKED = 'QUOTE_SAVE_CLICKED',
	QUOTE_REMOVE_CURRENT = 'QUOTE_REMOVE_CURRENT',
	QUOTE_MENU_SHOW = 'QUOTE_MENU_SHOW',
	RESET_HIDDEN_QUOTES = 'RESET_HIDDEN_QUOTES',
	SETTINGS_ACTION = 'SETTINGS_ACTION',
	SETTINGS_CHANGED = 'SETTINGS_CHANGED',
	PARSE_ERROR = 'PARSE_ERROR',
	UI_OPTIONS_SHOW = 'ui/options/show',
	UI_OPTIONS_TAB_SHOW = 'ui/options/tab/show',
	UI_OPTIONS_QUOTE_TAB_SHOW = 'ui/options/quote/tab/show',
}

export type ActionObject =
	| QuoteSelectNew
	| QuoteRemoveCurrent
	| QuoteMenuShow
	| QuoteEdit
	| QuoteCurrentSet
	| QuoteSaveClicked
	| QuoteAddBulk
	| QuoteBulkParseError
	| SettingsAction
	| SettingsChanged
	| UiOptionsShow
	| UiOptionsTabShow
	| UiOptionsQuoteTabShow;

export type UiOptionsShow = {
	type: ActionType.UI_OPTIONS_SHOW;
};
export type QuoteSelectNew = {
	type: ActionType.SELECT_NEW_QUOTE;
};
export type QuoteResetHidden = {
	type: ActionType.RESET_HIDDEN_QUOTES;
};

export type QuoteRemoveCurrent = {
	type: ActionType.QUOTE_REMOVE_CURRENT;
};

export type QuoteMenuShow = {
	type: ActionType.QUOTE_MENU_SHOW;
	show: 'SHOW' | 'HIDE' | 'TOGGLE';
};

export type QuoteSaveClicked = {
	type: ActionType.QUOTE_SAVE_CLICKED;
};

export type QuoteAddBulk = {
	type: ActionType.QUOTE_ADD_BULK;
	text: string;
};

export type CurrentQuote =
	| {
			type: 'custom';
			id: string;
	  }
	| { type: 'builtin'; id: number }
	| { type: 'none-found' };

export type QuoteCurrentSet = {
	type: ActionType.QUOTE_CURRENT_SET;
	quote: CurrentQuote;
};

export type QuoteEdit = {
	type: ActionType.QUOTE_EDIT;
	action:
		| { type: 'START' }
		| { type: 'CANCEL' }
		| { type: 'SET_TEXT'; text: string }
		| { type: 'SET_SOURCE'; source: string }
		| { type: 'TOGGLE_BULK' };
};

export type QuoteBulkParseError = {
	type: ActionType.PARSE_ERROR;
	message: string;
};

export type SettingsAction = {
	type: ActionType.SETTINGS_ACTION;
	action: SettingsActionObject;
};
export type SettingsChanged = {
	type: ActionType.SETTINGS_CHANGED;
	settings: SettingsState;
};

export type UiOptionsTabShow = {
	type: ActionType.UI_OPTIONS_TAB_SHOW;
	tab: 'quotes' | 'about';
};
export type UiOptionsQuoteTabShow = {
	type: ActionType.UI_OPTIONS_QUOTE_TAB_SHOW;
	tab: 'custom' | 'builtin';
};

export interface ActionTypeObject {
	type: ActionType;
}