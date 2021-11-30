/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean | null,
	_gt?:boolean | null,
	_gte?:boolean | null,
	_in?:boolean[],
	_is_null?:boolean | null,
	_lt?:boolean | null,
	_lte?:boolean | null,
	_neq?:boolean | null,
	_nin?:boolean[]
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number | null,
	_gt?:number | null,
	_gte?:number | null,
	_in?:number[],
	_is_null?:boolean | null,
	_lt?:number | null,
	_lte?:number | null,
	_neq?:number | null,
	_nin?:number[]
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string | null,
	_gt?:string | null,
	_gte?:string | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string | null,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string | null,
	_is_null?:boolean | null,
	/** does the column match the given pattern */
	_like?:string | null,
	_lt?:string | null,
	_lte?:string | null,
	_neq?:string | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string | null,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string | null,
	/** does the column NOT match the given pattern */
	_nlike?:string | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string | null,
	/** does the column match the given SQL regular expression */
	_similar?:string | null
};
	/** columns and relationships of "accounts" */
["accounts"]: AliasType<{
	address?:true,
	authentication_key?:true,
	base_url?:true,
	base_url_rotation_events_key?:true,
	compliance_key?:true,
	compliance_key_rotation_events_key?:true,
	create_account_event_stream_sequence_number?:true,
	delegated_key_rotation_capability?:true,
	delegated_withdrawal_capability?:true,
	diem_id_domain_events_key?:true,
	expiration_time?:true,
	human_name?:true,
	indexed_at?:true,
	is_frozen?:true,
	parent_vasp_address?:true,
	received_events_key?:true,
	received_mint_events_key?:true,
	role?:true,
	sent_events_key?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregated selection of "accounts" */
["accounts_aggregate"]: AliasType<{
	aggregate?:ValueTypes["accounts_aggregate_fields"],
	nodes?:ValueTypes["accounts"],
		__typename?: true
}>;
	/** aggregate fields of "accounts" */
["accounts_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["accounts_avg_fields"],
count?: [{	columns?:ValueTypes["accounts_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["accounts_max_fields"],
	min?:ValueTypes["accounts_min_fields"],
	stddev?:ValueTypes["accounts_stddev_fields"],
	stddev_pop?:ValueTypes["accounts_stddev_pop_fields"],
	stddev_samp?:ValueTypes["accounts_stddev_samp_fields"],
	sum?:ValueTypes["accounts_sum_fields"],
	var_pop?:ValueTypes["accounts_var_pop_fields"],
	var_samp?:ValueTypes["accounts_var_samp_fields"],
	variance?:ValueTypes["accounts_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["accounts_avg_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** columns and relationships of "accounts_balances" */
["accounts_balances"]: AliasType<{
	address?:true,
	balance?:true,
	currency?:true,
	timestamp?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregated selection of "accounts_balances" */
["accounts_balances_aggregate"]: AliasType<{
	aggregate?:ValueTypes["accounts_balances_aggregate_fields"],
	nodes?:ValueTypes["accounts_balances"],
		__typename?: true
}>;
	/** aggregate fields of "accounts_balances" */
["accounts_balances_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["accounts_balances_avg_fields"],
count?: [{	columns?:ValueTypes["accounts_balances_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["accounts_balances_max_fields"],
	min?:ValueTypes["accounts_balances_min_fields"],
	stddev?:ValueTypes["accounts_balances_stddev_fields"],
	stddev_pop?:ValueTypes["accounts_balances_stddev_pop_fields"],
	stddev_samp?:ValueTypes["accounts_balances_stddev_samp_fields"],
	sum?:ValueTypes["accounts_balances_sum_fields"],
	var_pop?:ValueTypes["accounts_balances_var_pop_fields"],
	var_samp?:ValueTypes["accounts_balances_var_samp_fields"],
	variance?:ValueTypes["accounts_balances_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["accounts_balances_avg_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "accounts_balances". All fields are combined with a logical 'AND'. */
["accounts_balances_bool_exp"]: {
	_and?:ValueTypes["accounts_balances_bool_exp"][],
	_not?:ValueTypes["accounts_balances_bool_exp"] | null,
	_or?:ValueTypes["accounts_balances_bool_exp"][],
	address?:ValueTypes["bpchar_comparison_exp"] | null,
	balance?:ValueTypes["bigint_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "accounts_balances" */
["accounts_balances_constraint"]:accounts_balances_constraint;
	/** input type for incrementing numeric columns in table "accounts_balances" */
["accounts_balances_inc_input"]: {
	balance?:ValueTypes["bigint"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "accounts_balances" */
["accounts_balances_insert_input"]: {
	address?:ValueTypes["bpchar"] | null,
	balance?:ValueTypes["bigint"] | null,
	currency?:ValueTypes["bpchar"] | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["accounts_balances_max_fields"]: AliasType<{
	address?:true,
	balance?:true,
	currency?:true,
	timestamp?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["accounts_balances_min_fields"]: AliasType<{
	address?:true,
	balance?:true,
	currency?:true,
	timestamp?:true,
	version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "accounts_balances" */
["accounts_balances_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["accounts_balances"],
		__typename?: true
}>;
	/** on conflict condition type for table "accounts_balances" */
["accounts_balances_on_conflict"]: {
	constraint:ValueTypes["accounts_balances_constraint"],
	update_columns:ValueTypes["accounts_balances_update_column"][],
	where?:ValueTypes["accounts_balances_bool_exp"] | null
};
	/** Ordering options when selecting data from "accounts_balances". */
["accounts_balances_order_by"]: {
	address?:ValueTypes["order_by"] | null,
	balance?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	timestamp?:ValueTypes["order_by"] | null,
	version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: accounts_balances */
["accounts_balances_pk_columns_input"]: {
	address:ValueTypes["bpchar"],
	currency:ValueTypes["bpchar"],
	version:ValueTypes["bigint"]
};
	/** select columns of table "accounts_balances" */
["accounts_balances_select_column"]:accounts_balances_select_column;
	/** input type for updating data in table "accounts_balances" */
["accounts_balances_set_input"]: {
	address?:ValueTypes["bpchar"] | null,
	balance?:ValueTypes["bigint"] | null,
	currency?:ValueTypes["bpchar"] | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["accounts_balances_stddev_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["accounts_balances_stddev_pop_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["accounts_balances_stddev_samp_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["accounts_balances_sum_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** update columns of table "accounts_balances" */
["accounts_balances_update_column"]:accounts_balances_update_column;
	/** aggregate var_pop on columns */
["accounts_balances_var_pop_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["accounts_balances_var_samp_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["accounts_balances_variance_fields"]: AliasType<{
	balance?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
["accounts_bool_exp"]: {
	_and?:ValueTypes["accounts_bool_exp"][],
	_not?:ValueTypes["accounts_bool_exp"] | null,
	_or?:ValueTypes["accounts_bool_exp"][],
	address?:ValueTypes["bpchar_comparison_exp"] | null,
	authentication_key?:ValueTypes["String_comparison_exp"] | null,
	base_url?:ValueTypes["String_comparison_exp"] | null,
	base_url_rotation_events_key?:ValueTypes["String_comparison_exp"] | null,
	compliance_key?:ValueTypes["String_comparison_exp"] | null,
	compliance_key_rotation_events_key?:ValueTypes["String_comparison_exp"] | null,
	create_account_event_stream_sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	delegated_key_rotation_capability?:ValueTypes["Boolean_comparison_exp"] | null,
	delegated_withdrawal_capability?:ValueTypes["Boolean_comparison_exp"] | null,
	diem_id_domain_events_key?:ValueTypes["String_comparison_exp"] | null,
	expiration_time?:ValueTypes["timestamptz_comparison_exp"] | null,
	human_name?:ValueTypes["String_comparison_exp"] | null,
	indexed_at?:ValueTypes["timestamptz_comparison_exp"] | null,
	is_frozen?:ValueTypes["Boolean_comparison_exp"] | null,
	parent_vasp_address?:ValueTypes["bpchar_comparison_exp"] | null,
	received_events_key?:ValueTypes["String_comparison_exp"] | null,
	received_mint_events_key?:ValueTypes["String_comparison_exp"] | null,
	role?:ValueTypes["Int_comparison_exp"] | null,
	sent_events_key?:ValueTypes["String_comparison_exp"] | null,
	transaction_version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "accounts" */
["accounts_constraint"]:accounts_constraint;
	/** input type for incrementing numeric columns in table "accounts" */
["accounts_inc_input"]: {
	create_account_event_stream_sequence_number?:ValueTypes["bigint"] | null,
	role?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "accounts" */
["accounts_insert_input"]: {
	address?:ValueTypes["bpchar"] | null,
	authentication_key?:string | null,
	base_url?:string | null,
	base_url_rotation_events_key?:string | null,
	compliance_key?:string | null,
	compliance_key_rotation_events_key?:string | null,
	create_account_event_stream_sequence_number?:ValueTypes["bigint"] | null,
	delegated_key_rotation_capability?:boolean | null,
	delegated_withdrawal_capability?:boolean | null,
	diem_id_domain_events_key?:string | null,
	expiration_time?:ValueTypes["timestamptz"] | null,
	human_name?:string | null,
	indexed_at?:ValueTypes["timestamptz"] | null,
	is_frozen?:boolean | null,
	parent_vasp_address?:ValueTypes["bpchar"] | null,
	received_events_key?:string | null,
	received_mint_events_key?:string | null,
	role?:number | null,
	sent_events_key?:string | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["accounts_max_fields"]: AliasType<{
	address?:true,
	authentication_key?:true,
	base_url?:true,
	base_url_rotation_events_key?:true,
	compliance_key?:true,
	compliance_key_rotation_events_key?:true,
	create_account_event_stream_sequence_number?:true,
	diem_id_domain_events_key?:true,
	expiration_time?:true,
	human_name?:true,
	indexed_at?:true,
	parent_vasp_address?:true,
	received_events_key?:true,
	received_mint_events_key?:true,
	role?:true,
	sent_events_key?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["accounts_min_fields"]: AliasType<{
	address?:true,
	authentication_key?:true,
	base_url?:true,
	base_url_rotation_events_key?:true,
	compliance_key?:true,
	compliance_key_rotation_events_key?:true,
	create_account_event_stream_sequence_number?:true,
	diem_id_domain_events_key?:true,
	expiration_time?:true,
	human_name?:true,
	indexed_at?:true,
	parent_vasp_address?:true,
	received_events_key?:true,
	received_mint_events_key?:true,
	role?:true,
	sent_events_key?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "accounts" */
["accounts_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["accounts"],
		__typename?: true
}>;
	/** on conflict condition type for table "accounts" */
["accounts_on_conflict"]: {
	constraint:ValueTypes["accounts_constraint"],
	update_columns:ValueTypes["accounts_update_column"][],
	where?:ValueTypes["accounts_bool_exp"] | null
};
	/** Ordering options when selecting data from "accounts". */
["accounts_order_by"]: {
	address?:ValueTypes["order_by"] | null,
	authentication_key?:ValueTypes["order_by"] | null,
	base_url?:ValueTypes["order_by"] | null,
	base_url_rotation_events_key?:ValueTypes["order_by"] | null,
	compliance_key?:ValueTypes["order_by"] | null,
	compliance_key_rotation_events_key?:ValueTypes["order_by"] | null,
	create_account_event_stream_sequence_number?:ValueTypes["order_by"] | null,
	delegated_key_rotation_capability?:ValueTypes["order_by"] | null,
	delegated_withdrawal_capability?:ValueTypes["order_by"] | null,
	diem_id_domain_events_key?:ValueTypes["order_by"] | null,
	expiration_time?:ValueTypes["order_by"] | null,
	human_name?:ValueTypes["order_by"] | null,
	indexed_at?:ValueTypes["order_by"] | null,
	is_frozen?:ValueTypes["order_by"] | null,
	parent_vasp_address?:ValueTypes["order_by"] | null,
	received_events_key?:ValueTypes["order_by"] | null,
	received_mint_events_key?:ValueTypes["order_by"] | null,
	role?:ValueTypes["order_by"] | null,
	sent_events_key?:ValueTypes["order_by"] | null,
	transaction_version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: accounts */
["accounts_pk_columns_input"]: {
	address:ValueTypes["bpchar"]
};
	/** select columns of table "accounts" */
["accounts_select_column"]:accounts_select_column;
	/** input type for updating data in table "accounts" */
["accounts_set_input"]: {
	address?:ValueTypes["bpchar"] | null,
	authentication_key?:string | null,
	base_url?:string | null,
	base_url_rotation_events_key?:string | null,
	compliance_key?:string | null,
	compliance_key_rotation_events_key?:string | null,
	create_account_event_stream_sequence_number?:ValueTypes["bigint"] | null,
	delegated_key_rotation_capability?:boolean | null,
	delegated_withdrawal_capability?:boolean | null,
	diem_id_domain_events_key?:string | null,
	expiration_time?:ValueTypes["timestamptz"] | null,
	human_name?:string | null,
	indexed_at?:ValueTypes["timestamptz"] | null,
	is_frozen?:boolean | null,
	parent_vasp_address?:ValueTypes["bpchar"] | null,
	received_events_key?:string | null,
	received_mint_events_key?:string | null,
	role?:number | null,
	sent_events_key?:string | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["accounts_stddev_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["accounts_stddev_pop_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["accounts_stddev_samp_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["accounts_sum_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** update columns of table "accounts" */
["accounts_update_column"]:accounts_update_column;
	/** aggregate var_pop on columns */
["accounts_var_pop_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["accounts_var_samp_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["accounts_variance_fields"]: AliasType<{
	create_account_event_stream_sequence_number?:true,
	role?:true,
	transaction_version?:true,
		__typename?: true
}>;
	["bigint"]:unknown;
	/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: {
	_eq?:ValueTypes["bigint"] | null,
	_gt?:ValueTypes["bigint"] | null,
	_gte?:ValueTypes["bigint"] | null,
	_in?:ValueTypes["bigint"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["bigint"] | null,
	_lte?:ValueTypes["bigint"] | null,
	_neq?:ValueTypes["bigint"] | null,
	_nin?:ValueTypes["bigint"][]
};
	["bpchar"]:unknown;
	/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
["bpchar_comparison_exp"]: {
	_eq?:ValueTypes["bpchar"] | null,
	_gt?:ValueTypes["bpchar"] | null,
	_gte?:ValueTypes["bpchar"] | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?:ValueTypes["bpchar"] | null,
	_in?:ValueTypes["bpchar"][],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:ValueTypes["bpchar"] | null,
	_is_null?:boolean | null,
	/** does the column match the given pattern */
	_like?:ValueTypes["bpchar"] | null,
	_lt?:ValueTypes["bpchar"] | null,
	_lte?:ValueTypes["bpchar"] | null,
	_neq?:ValueTypes["bpchar"] | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:ValueTypes["bpchar"] | null,
	_nin?:ValueTypes["bpchar"][],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:ValueTypes["bpchar"] | null,
	/** does the column NOT match the given pattern */
	_nlike?:ValueTypes["bpchar"] | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:ValueTypes["bpchar"] | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:ValueTypes["bpchar"] | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:ValueTypes["bpchar"] | null,
	/** does the column match the given SQL regular expression */
	_similar?:ValueTypes["bpchar"] | null
};
	/** columns and relationships of "burn_events" */
["burn_events"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregated selection of "burn_events" */
["burn_events_aggregate"]: AliasType<{
	aggregate?:ValueTypes["burn_events_aggregate_fields"],
	nodes?:ValueTypes["burn_events"],
		__typename?: true
}>;
	/** aggregate fields of "burn_events" */
["burn_events_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["burn_events_avg_fields"],
count?: [{	columns?:ValueTypes["burn_events_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["burn_events_max_fields"],
	min?:ValueTypes["burn_events_min_fields"],
	stddev?:ValueTypes["burn_events_stddev_fields"],
	stddev_pop?:ValueTypes["burn_events_stddev_pop_fields"],
	stddev_samp?:ValueTypes["burn_events_stddev_samp_fields"],
	sum?:ValueTypes["burn_events_sum_fields"],
	var_pop?:ValueTypes["burn_events_var_pop_fields"],
	var_samp?:ValueTypes["burn_events_var_samp_fields"],
	variance?:ValueTypes["burn_events_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["burn_events_avg_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "burn_events". All fields are combined with a logical 'AND'. */
["burn_events_bool_exp"]: {
	_and?:ValueTypes["burn_events_bool_exp"][],
	_not?:ValueTypes["burn_events_bool_exp"] | null,
	_or?:ValueTypes["burn_events_bool_exp"][],
	address?:ValueTypes["bpchar_comparison_exp"] | null,
	amount?:ValueTypes["bigint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	key?:ValueTypes["String_comparison_exp"] | null,
	sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	transaction_version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "burn_events" */
["burn_events_constraint"]:burn_events_constraint;
	/** input type for incrementing numeric columns in table "burn_events" */
["burn_events_inc_input"]: {
	amount?:ValueTypes["bigint"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "burn_events" */
["burn_events_insert_input"]: {
	address?:ValueTypes["bpchar"] | null,
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["burn_events_max_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["burn_events_min_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "burn_events" */
["burn_events_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["burn_events"],
		__typename?: true
}>;
	/** on conflict condition type for table "burn_events" */
["burn_events_on_conflict"]: {
	constraint:ValueTypes["burn_events_constraint"],
	update_columns:ValueTypes["burn_events_update_column"][],
	where?:ValueTypes["burn_events_bool_exp"] | null
};
	/** Ordering options when selecting data from "burn_events". */
["burn_events_order_by"]: {
	address?:ValueTypes["order_by"] | null,
	amount?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	key?:ValueTypes["order_by"] | null,
	sequence_number?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	transaction_version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: burn_events */
["burn_events_pk_columns_input"]: {
	key:string,
	sequence_number:ValueTypes["bigint"]
};
	/** select columns of table "burn_events" */
["burn_events_select_column"]:burn_events_select_column;
	/** input type for updating data in table "burn_events" */
["burn_events_set_input"]: {
	address?:ValueTypes["bpchar"] | null,
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["burn_events_stddev_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["burn_events_stddev_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["burn_events_stddev_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["burn_events_sum_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** update columns of table "burn_events" */
["burn_events_update_column"]:burn_events_update_column;
	/** aggregate var_pop on columns */
["burn_events_var_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["burn_events_var_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["burn_events_variance_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** columns and relationships of "burns" */
["burns"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregated selection of "burns" */
["burns_aggregate"]: AliasType<{
	aggregate?:ValueTypes["burns_aggregate_fields"],
	nodes?:ValueTypes["burns"],
		__typename?: true
}>;
	/** aggregate fields of "burns" */
["burns_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["burns_avg_fields"],
count?: [{	columns?:ValueTypes["burns_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["burns_max_fields"],
	min?:ValueTypes["burns_min_fields"],
	stddev?:ValueTypes["burns_stddev_fields"],
	stddev_pop?:ValueTypes["burns_stddev_pop_fields"],
	stddev_samp?:ValueTypes["burns_stddev_samp_fields"],
	sum?:ValueTypes["burns_sum_fields"],
	var_pop?:ValueTypes["burns_var_pop_fields"],
	var_samp?:ValueTypes["burns_var_samp_fields"],
	variance?:ValueTypes["burns_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["burns_avg_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "burns". All fields are combined with a logical 'AND'. */
["burns_bool_exp"]: {
	_and?:ValueTypes["burns_bool_exp"][],
	_not?:ValueTypes["burns_bool_exp"] | null,
	_or?:ValueTypes["burns_bool_exp"][],
	address?:ValueTypes["bpchar_comparison_exp"] | null,
	amount?:ValueTypes["bigint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** aggregate max on columns */
["burns_max_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["burns_min_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** Ordering options when selecting data from "burns". */
["burns_order_by"]: {
	address?:ValueTypes["order_by"] | null,
	amount?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	version?:ValueTypes["order_by"] | null
};
	/** select columns of table "burns" */
["burns_select_column"]:burns_select_column;
	/** aggregate stddev on columns */
["burns_stddev_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["burns_stddev_pop_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["burns_stddev_samp_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["burns_sum_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_pop on columns */
["burns_var_pop_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["burns_var_samp_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["burns_variance_fields"]: AliasType<{
	amount?:true,
	status?:true,
	version?:true,
		__typename?: true
}>;
	/** columns and relationships of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates"]: AliasType<{
	currency?:true,
	timestamp?:true,
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregated selection of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate"]: AliasType<{
	aggregate?:ValueTypes["diem_in_circulation_realtime_aggregates_aggregate_fields"],
	nodes?:ValueTypes["diem_in_circulation_realtime_aggregates"],
		__typename?: true
}>;
	/** aggregate fields of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["diem_in_circulation_realtime_aggregates_avg_fields"],
count?: [{	columns?:ValueTypes["diem_in_circulation_realtime_aggregates_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["diem_in_circulation_realtime_aggregates_max_fields"],
	min?:ValueTypes["diem_in_circulation_realtime_aggregates_min_fields"],
	stddev?:ValueTypes["diem_in_circulation_realtime_aggregates_stddev_fields"],
	stddev_pop?:ValueTypes["diem_in_circulation_realtime_aggregates_stddev_pop_fields"],
	stddev_samp?:ValueTypes["diem_in_circulation_realtime_aggregates_stddev_samp_fields"],
	sum?:ValueTypes["diem_in_circulation_realtime_aggregates_sum_fields"],
	var_pop?:ValueTypes["diem_in_circulation_realtime_aggregates_var_pop_fields"],
	var_samp?:ValueTypes["diem_in_circulation_realtime_aggregates_var_samp_fields"],
	variance?:ValueTypes["diem_in_circulation_realtime_aggregates_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["diem_in_circulation_realtime_aggregates_avg_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "diem_in_circulation_realtime_aggregates". All fields are combined with a logical 'AND'. */
["diem_in_circulation_realtime_aggregates_bool_exp"]: {
	_and?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"][],
	_not?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null,
	_or?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"][],
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	total_burn_value?:ValueTypes["bigint_comparison_exp"] | null,
	total_mint_value?:ValueTypes["bigint_comparison_exp"] | null,
	total_net_value?:ValueTypes["bigint_comparison_exp"] | null,
	version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_constraint"]:diem_in_circulation_realtime_aggregates_constraint;
	/** input type for incrementing numeric columns in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_inc_input"]: {
	total_burn_value?:ValueTypes["bigint"] | null,
	total_mint_value?:ValueTypes["bigint"] | null,
	total_net_value?:ValueTypes["bigint"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_insert_input"]: {
	currency?:ValueTypes["bpchar"] | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	total_burn_value?:ValueTypes["bigint"] | null,
	total_mint_value?:ValueTypes["bigint"] | null,
	total_net_value?:ValueTypes["bigint"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["diem_in_circulation_realtime_aggregates_max_fields"]: AliasType<{
	currency?:true,
	timestamp?:true,
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["diem_in_circulation_realtime_aggregates_min_fields"]: AliasType<{
	currency?:true,
	timestamp?:true,
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["diem_in_circulation_realtime_aggregates"],
		__typename?: true
}>;
	/** on conflict condition type for table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_on_conflict"]: {
	constraint:ValueTypes["diem_in_circulation_realtime_aggregates_constraint"],
	update_columns:ValueTypes["diem_in_circulation_realtime_aggregates_update_column"][],
	where?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null
};
	/** Ordering options when selecting data from "diem_in_circulation_realtime_aggregates". */
["diem_in_circulation_realtime_aggregates_order_by"]: {
	currency?:ValueTypes["order_by"] | null,
	timestamp?:ValueTypes["order_by"] | null,
	total_burn_value?:ValueTypes["order_by"] | null,
	total_mint_value?:ValueTypes["order_by"] | null,
	total_net_value?:ValueTypes["order_by"] | null,
	version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: diem_in_circulation_realtime_aggregates */
["diem_in_circulation_realtime_aggregates_pk_columns_input"]: {
	currency:ValueTypes["bpchar"],
	version:ValueTypes["bigint"]
};
	/** select columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_select_column"]:diem_in_circulation_realtime_aggregates_select_column;
	/** input type for updating data in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_set_input"]: {
	currency?:ValueTypes["bpchar"] | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	total_burn_value?:ValueTypes["bigint"] | null,
	total_mint_value?:ValueTypes["bigint"] | null,
	total_net_value?:ValueTypes["bigint"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["diem_in_circulation_realtime_aggregates_stddev_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["diem_in_circulation_realtime_aggregates_stddev_pop_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["diem_in_circulation_realtime_aggregates_stddev_samp_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["diem_in_circulation_realtime_aggregates_sum_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** update columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_update_column"]:diem_in_circulation_realtime_aggregates_update_column;
	/** aggregate var_pop on columns */
["diem_in_circulation_realtime_aggregates_var_pop_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["diem_in_circulation_realtime_aggregates_var_samp_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["diem_in_circulation_realtime_aggregates_variance_fields"]: AliasType<{
	total_burn_value?:true,
	total_mint_value?:true,
	total_net_value?:true,
	version?:true,
		__typename?: true
}>;
	/** columns and relationships of "gas_payments" */
["gas_payments"]: AliasType<{
	commit_timestamp?:true,
	currency?:true,
	gas_paid?:true,
	receiver?:true,
	sender?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregated selection of "gas_payments" */
["gas_payments_aggregate"]: AliasType<{
	aggregate?:ValueTypes["gas_payments_aggregate_fields"],
	nodes?:ValueTypes["gas_payments"],
		__typename?: true
}>;
	/** aggregate fields of "gas_payments" */
["gas_payments_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["gas_payments_avg_fields"],
count?: [{	columns?:ValueTypes["gas_payments_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["gas_payments_max_fields"],
	min?:ValueTypes["gas_payments_min_fields"],
	stddev?:ValueTypes["gas_payments_stddev_fields"],
	stddev_pop?:ValueTypes["gas_payments_stddev_pop_fields"],
	stddev_samp?:ValueTypes["gas_payments_stddev_samp_fields"],
	sum?:ValueTypes["gas_payments_sum_fields"],
	var_pop?:ValueTypes["gas_payments_var_pop_fields"],
	var_samp?:ValueTypes["gas_payments_var_samp_fields"],
	variance?:ValueTypes["gas_payments_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["gas_payments_avg_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "gas_payments". All fields are combined with a logical 'AND'. */
["gas_payments_bool_exp"]: {
	_and?:ValueTypes["gas_payments_bool_exp"][],
	_not?:ValueTypes["gas_payments_bool_exp"] | null,
	_or?:ValueTypes["gas_payments_bool_exp"][],
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	gas_paid?:ValueTypes["bigint_comparison_exp"] | null,
	receiver?:ValueTypes["bpchar_comparison_exp"] | null,
	sender?:ValueTypes["bpchar_comparison_exp"] | null,
	version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "gas_payments" */
["gas_payments_constraint"]:gas_payments_constraint;
	/** input type for incrementing numeric columns in table "gas_payments" */
["gas_payments_inc_input"]: {
	gas_paid?:ValueTypes["bigint"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "gas_payments" */
["gas_payments_insert_input"]: {
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	gas_paid?:ValueTypes["bigint"] | null,
	receiver?:ValueTypes["bpchar"] | null,
	sender?:ValueTypes["bpchar"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["gas_payments_max_fields"]: AliasType<{
	commit_timestamp?:true,
	currency?:true,
	gas_paid?:true,
	receiver?:true,
	sender?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["gas_payments_min_fields"]: AliasType<{
	commit_timestamp?:true,
	currency?:true,
	gas_paid?:true,
	receiver?:true,
	sender?:true,
	version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "gas_payments" */
["gas_payments_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["gas_payments"],
		__typename?: true
}>;
	/** on conflict condition type for table "gas_payments" */
["gas_payments_on_conflict"]: {
	constraint:ValueTypes["gas_payments_constraint"],
	update_columns:ValueTypes["gas_payments_update_column"][],
	where?:ValueTypes["gas_payments_bool_exp"] | null
};
	/** Ordering options when selecting data from "gas_payments". */
["gas_payments_order_by"]: {
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	gas_paid?:ValueTypes["order_by"] | null,
	receiver?:ValueTypes["order_by"] | null,
	sender?:ValueTypes["order_by"] | null,
	version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: gas_payments */
["gas_payments_pk_columns_input"]: {
	version:ValueTypes["bigint"]
};
	/** select columns of table "gas_payments" */
["gas_payments_select_column"]:gas_payments_select_column;
	/** input type for updating data in table "gas_payments" */
["gas_payments_set_input"]: {
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	gas_paid?:ValueTypes["bigint"] | null,
	receiver?:ValueTypes["bpchar"] | null,
	sender?:ValueTypes["bpchar"] | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["gas_payments_stddev_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["gas_payments_stddev_pop_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["gas_payments_stddev_samp_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["gas_payments_sum_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** update columns of table "gas_payments" */
["gas_payments_update_column"]:gas_payments_update_column;
	/** aggregate var_pop on columns */
["gas_payments_var_pop_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["gas_payments_var_samp_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["gas_payments_variance_fields"]: AliasType<{
	gas_paid?:true,
	version?:true,
		__typename?: true
}>;
	/** mutation root */
["mutation_root"]: AliasType<{
delete_accounts?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["accounts_bool_exp"]},ValueTypes["accounts_mutation_response"]],
delete_accounts_balances?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["accounts_balances_bool_exp"]},ValueTypes["accounts_balances_mutation_response"]],
delete_accounts_balances_by_pk?: [{	address:ValueTypes["bpchar"],	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["accounts_balances"]],
delete_accounts_by_pk?: [{	address:ValueTypes["bpchar"]},ValueTypes["accounts"]],
delete_burn_events?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["burn_events_bool_exp"]},ValueTypes["burn_events_mutation_response"]],
delete_burn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["burn_events"]],
delete_diem_in_circulation_realtime_aggregates?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"]},ValueTypes["diem_in_circulation_realtime_aggregates_mutation_response"]],
delete_diem_in_circulation_realtime_aggregates_by_pk?: [{	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["diem_in_circulation_realtime_aggregates"]],
delete_gas_payments?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["gas_payments_bool_exp"]},ValueTypes["gas_payments_mutation_response"]],
delete_gas_payments_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["gas_payments"]],
delete_preburn_events?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["preburn_events_bool_exp"]},ValueTypes["preburn_events_mutation_response"]],
delete_preburn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["preburn_events"]],
delete_receivedmint_events?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["receivedmint_events_bool_exp"]},ValueTypes["receivedmint_events_mutation_response"]],
delete_receivedmint_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["receivedmint_events"]],
delete_sentpayment_events?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["sentpayment_events_bool_exp"]},ValueTypes["sentpayment_events_mutation_response"]],
delete_sentpayment_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["sentpayment_events"]],
delete_transactions?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["transactions_bool_exp"]},ValueTypes["transactions_mutation_response"]],
delete_transactions_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["transactions"]],
insert_accounts?: [{	/** the rows to be inserted */
	objects:ValueTypes["accounts_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["accounts_on_conflict"] | null},ValueTypes["accounts_mutation_response"]],
insert_accounts_balances?: [{	/** the rows to be inserted */
	objects:ValueTypes["accounts_balances_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["accounts_balances_on_conflict"] | null},ValueTypes["accounts_balances_mutation_response"]],
insert_accounts_balances_one?: [{	/** the row to be inserted */
	object:ValueTypes["accounts_balances_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["accounts_balances_on_conflict"] | null},ValueTypes["accounts_balances"]],
insert_accounts_one?: [{	/** the row to be inserted */
	object:ValueTypes["accounts_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["accounts_on_conflict"] | null},ValueTypes["accounts"]],
insert_burn_events?: [{	/** the rows to be inserted */
	objects:ValueTypes["burn_events_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["burn_events_on_conflict"] | null},ValueTypes["burn_events_mutation_response"]],
insert_burn_events_one?: [{	/** the row to be inserted */
	object:ValueTypes["burn_events_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["burn_events_on_conflict"] | null},ValueTypes["burn_events"]],
insert_diem_in_circulation_realtime_aggregates?: [{	/** the rows to be inserted */
	objects:ValueTypes["diem_in_circulation_realtime_aggregates_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["diem_in_circulation_realtime_aggregates_on_conflict"] | null},ValueTypes["diem_in_circulation_realtime_aggregates_mutation_response"]],
insert_diem_in_circulation_realtime_aggregates_one?: [{	/** the row to be inserted */
	object:ValueTypes["diem_in_circulation_realtime_aggregates_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["diem_in_circulation_realtime_aggregates_on_conflict"] | null},ValueTypes["diem_in_circulation_realtime_aggregates"]],
insert_gas_payments?: [{	/** the rows to be inserted */
	objects:ValueTypes["gas_payments_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["gas_payments_on_conflict"] | null},ValueTypes["gas_payments_mutation_response"]],
insert_gas_payments_one?: [{	/** the row to be inserted */
	object:ValueTypes["gas_payments_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["gas_payments_on_conflict"] | null},ValueTypes["gas_payments"]],
insert_preburn_events?: [{	/** the rows to be inserted */
	objects:ValueTypes["preburn_events_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["preburn_events_on_conflict"] | null},ValueTypes["preburn_events_mutation_response"]],
insert_preburn_events_one?: [{	/** the row to be inserted */
	object:ValueTypes["preburn_events_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["preburn_events_on_conflict"] | null},ValueTypes["preburn_events"]],
insert_receivedmint_events?: [{	/** the rows to be inserted */
	objects:ValueTypes["receivedmint_events_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["receivedmint_events_on_conflict"] | null},ValueTypes["receivedmint_events_mutation_response"]],
insert_receivedmint_events_one?: [{	/** the row to be inserted */
	object:ValueTypes["receivedmint_events_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["receivedmint_events_on_conflict"] | null},ValueTypes["receivedmint_events"]],
insert_sentpayment_events?: [{	/** the rows to be inserted */
	objects:ValueTypes["sentpayment_events_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["sentpayment_events_on_conflict"] | null},ValueTypes["sentpayment_events_mutation_response"]],
insert_sentpayment_events_one?: [{	/** the row to be inserted */
	object:ValueTypes["sentpayment_events_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["sentpayment_events_on_conflict"] | null},ValueTypes["sentpayment_events"]],
insert_transactions?: [{	/** the rows to be inserted */
	objects:ValueTypes["transactions_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["transactions_on_conflict"] | null},ValueTypes["transactions_mutation_response"]],
insert_transactions_one?: [{	/** the row to be inserted */
	object:ValueTypes["transactions_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["transactions_on_conflict"] | null},ValueTypes["transactions"]],
update_accounts?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["accounts_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["accounts_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["accounts_bool_exp"]},ValueTypes["accounts_mutation_response"]],
update_accounts_balances?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["accounts_balances_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["accounts_balances_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["accounts_balances_bool_exp"]},ValueTypes["accounts_balances_mutation_response"]],
update_accounts_balances_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["accounts_balances_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["accounts_balances_set_input"] | null,	pk_columns:ValueTypes["accounts_balances_pk_columns_input"]},ValueTypes["accounts_balances"]],
update_accounts_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["accounts_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["accounts_set_input"] | null,	pk_columns:ValueTypes["accounts_pk_columns_input"]},ValueTypes["accounts"]],
update_burn_events?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["burn_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["burn_events_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["burn_events_bool_exp"]},ValueTypes["burn_events_mutation_response"]],
update_burn_events_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["burn_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["burn_events_set_input"] | null,	pk_columns:ValueTypes["burn_events_pk_columns_input"]},ValueTypes["burn_events"]],
update_diem_in_circulation_realtime_aggregates?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["diem_in_circulation_realtime_aggregates_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["diem_in_circulation_realtime_aggregates_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"]},ValueTypes["diem_in_circulation_realtime_aggregates_mutation_response"]],
update_diem_in_circulation_realtime_aggregates_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["diem_in_circulation_realtime_aggregates_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["diem_in_circulation_realtime_aggregates_set_input"] | null,	pk_columns:ValueTypes["diem_in_circulation_realtime_aggregates_pk_columns_input"]},ValueTypes["diem_in_circulation_realtime_aggregates"]],
update_gas_payments?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["gas_payments_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["gas_payments_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["gas_payments_bool_exp"]},ValueTypes["gas_payments_mutation_response"]],
update_gas_payments_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["gas_payments_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["gas_payments_set_input"] | null,	pk_columns:ValueTypes["gas_payments_pk_columns_input"]},ValueTypes["gas_payments"]],
update_preburn_events?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["preburn_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["preburn_events_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["preburn_events_bool_exp"]},ValueTypes["preburn_events_mutation_response"]],
update_preburn_events_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["preburn_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["preburn_events_set_input"] | null,	pk_columns:ValueTypes["preburn_events_pk_columns_input"]},ValueTypes["preburn_events"]],
update_receivedmint_events?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["receivedmint_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["receivedmint_events_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["receivedmint_events_bool_exp"]},ValueTypes["receivedmint_events_mutation_response"]],
update_receivedmint_events_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["receivedmint_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["receivedmint_events_set_input"] | null,	pk_columns:ValueTypes["receivedmint_events_pk_columns_input"]},ValueTypes["receivedmint_events"]],
update_sentpayment_events?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["sentpayment_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["sentpayment_events_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["sentpayment_events_bool_exp"]},ValueTypes["sentpayment_events_mutation_response"]],
update_sentpayment_events_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["sentpayment_events_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["sentpayment_events_set_input"] | null,	pk_columns:ValueTypes["sentpayment_events_pk_columns_input"]},ValueTypes["sentpayment_events"]],
update_transactions?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["transactions_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["transactions_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["transactions_bool_exp"]},ValueTypes["transactions_mutation_response"]],
update_transactions_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["transactions_inc_input"] | null,	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["transactions_set_input"] | null,	pk_columns:ValueTypes["transactions_pk_columns_input"]},ValueTypes["transactions"]],
		__typename?: true
}>;
	/** column ordering options */
["order_by"]:order_by;
	/** columns and relationships of "preburn_events" */
["preburn_events"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregated selection of "preburn_events" */
["preburn_events_aggregate"]: AliasType<{
	aggregate?:ValueTypes["preburn_events_aggregate_fields"],
	nodes?:ValueTypes["preburn_events"],
		__typename?: true
}>;
	/** aggregate fields of "preburn_events" */
["preburn_events_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["preburn_events_avg_fields"],
count?: [{	columns?:ValueTypes["preburn_events_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["preburn_events_max_fields"],
	min?:ValueTypes["preburn_events_min_fields"],
	stddev?:ValueTypes["preburn_events_stddev_fields"],
	stddev_pop?:ValueTypes["preburn_events_stddev_pop_fields"],
	stddev_samp?:ValueTypes["preburn_events_stddev_samp_fields"],
	sum?:ValueTypes["preburn_events_sum_fields"],
	var_pop?:ValueTypes["preburn_events_var_pop_fields"],
	var_samp?:ValueTypes["preburn_events_var_samp_fields"],
	variance?:ValueTypes["preburn_events_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["preburn_events_avg_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "preburn_events". All fields are combined with a logical 'AND'. */
["preburn_events_bool_exp"]: {
	_and?:ValueTypes["preburn_events_bool_exp"][],
	_not?:ValueTypes["preburn_events_bool_exp"] | null,
	_or?:ValueTypes["preburn_events_bool_exp"][],
	address?:ValueTypes["bpchar_comparison_exp"] | null,
	amount?:ValueTypes["bigint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	key?:ValueTypes["String_comparison_exp"] | null,
	sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	transaction_version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "preburn_events" */
["preburn_events_constraint"]:preburn_events_constraint;
	/** input type for incrementing numeric columns in table "preburn_events" */
["preburn_events_inc_input"]: {
	amount?:ValueTypes["bigint"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "preburn_events" */
["preburn_events_insert_input"]: {
	address?:ValueTypes["bpchar"] | null,
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["preburn_events_max_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["preburn_events_min_fields"]: AliasType<{
	address?:true,
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "preburn_events" */
["preburn_events_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["preburn_events"],
		__typename?: true
}>;
	/** on conflict condition type for table "preburn_events" */
["preburn_events_on_conflict"]: {
	constraint:ValueTypes["preburn_events_constraint"],
	update_columns:ValueTypes["preburn_events_update_column"][],
	where?:ValueTypes["preburn_events_bool_exp"] | null
};
	/** Ordering options when selecting data from "preburn_events". */
["preburn_events_order_by"]: {
	address?:ValueTypes["order_by"] | null,
	amount?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	key?:ValueTypes["order_by"] | null,
	sequence_number?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	transaction_version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: preburn_events */
["preburn_events_pk_columns_input"]: {
	key:string,
	sequence_number:ValueTypes["bigint"]
};
	/** select columns of table "preburn_events" */
["preburn_events_select_column"]:preburn_events_select_column;
	/** input type for updating data in table "preburn_events" */
["preburn_events_set_input"]: {
	address?:ValueTypes["bpchar"] | null,
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["preburn_events_stddev_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["preburn_events_stddev_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["preburn_events_stddev_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["preburn_events_sum_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** update columns of table "preburn_events" */
["preburn_events_update_column"]:preburn_events_update_column;
	/** aggregate var_pop on columns */
["preburn_events_var_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["preburn_events_var_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["preburn_events_variance_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	["query_root"]: AliasType<{
accounts?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_bool_exp"] | null},ValueTypes["accounts"]],
accounts_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_bool_exp"] | null},ValueTypes["accounts_aggregate"]],
accounts_balances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_balances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_balances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_balances_bool_exp"] | null},ValueTypes["accounts_balances"]],
accounts_balances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_balances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_balances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_balances_bool_exp"] | null},ValueTypes["accounts_balances_aggregate"]],
accounts_balances_by_pk?: [{	address:ValueTypes["bpchar"],	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["accounts_balances"]],
accounts_by_pk?: [{	address:ValueTypes["bpchar"]},ValueTypes["accounts"]],
burn_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burn_events_bool_exp"] | null},ValueTypes["burn_events"]],
burn_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burn_events_bool_exp"] | null},ValueTypes["burn_events_aggregate"]],
burn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["burn_events"]],
burns?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burns_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burns_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burns_bool_exp"] | null},ValueTypes["burns"]],
burns_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burns_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burns_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burns_bool_exp"] | null},ValueTypes["burns_aggregate"]],
diem_in_circulation_realtime_aggregates?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["diem_in_circulation_realtime_aggregates_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["diem_in_circulation_realtime_aggregates_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null},ValueTypes["diem_in_circulation_realtime_aggregates"]],
diem_in_circulation_realtime_aggregates_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["diem_in_circulation_realtime_aggregates_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["diem_in_circulation_realtime_aggregates_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null},ValueTypes["diem_in_circulation_realtime_aggregates_aggregate"]],
diem_in_circulation_realtime_aggregates_by_pk?: [{	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["diem_in_circulation_realtime_aggregates"]],
gas_payments?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["gas_payments_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["gas_payments_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["gas_payments_bool_exp"] | null},ValueTypes["gas_payments"]],
gas_payments_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["gas_payments_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["gas_payments_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["gas_payments_bool_exp"] | null},ValueTypes["gas_payments_aggregate"]],
gas_payments_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["gas_payments"]],
preburn_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["preburn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["preburn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["preburn_events_bool_exp"] | null},ValueTypes["preburn_events"]],
preburn_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["preburn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["preburn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["preburn_events_bool_exp"] | null},ValueTypes["preburn_events_aggregate"]],
preburn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["preburn_events"]],
receivedmint_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["receivedmint_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["receivedmint_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["receivedmint_events_bool_exp"] | null},ValueTypes["receivedmint_events"]],
receivedmint_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["receivedmint_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["receivedmint_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["receivedmint_events_bool_exp"] | null},ValueTypes["receivedmint_events_aggregate"]],
receivedmint_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["receivedmint_events"]],
sentpayment_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["sentpayment_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["sentpayment_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["sentpayment_events_bool_exp"] | null},ValueTypes["sentpayment_events"]],
sentpayment_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["sentpayment_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["sentpayment_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["sentpayment_events_bool_exp"] | null},ValueTypes["sentpayment_events_aggregate"]],
sentpayment_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["sentpayment_events"]],
transactions?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["transactions_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["transactions_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["transactions_bool_exp"] | null},ValueTypes["transactions"]],
transactions_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["transactions_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["transactions_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["transactions_bool_exp"] | null},ValueTypes["transactions_aggregate"]],
transactions_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["transactions"]],
		__typename?: true
}>;
	/** columns and relationships of "receivedmint_events" */
["receivedmint_events"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	receiver?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregated selection of "receivedmint_events" */
["receivedmint_events_aggregate"]: AliasType<{
	aggregate?:ValueTypes["receivedmint_events_aggregate_fields"],
	nodes?:ValueTypes["receivedmint_events"],
		__typename?: true
}>;
	/** aggregate fields of "receivedmint_events" */
["receivedmint_events_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["receivedmint_events_avg_fields"],
count?: [{	columns?:ValueTypes["receivedmint_events_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["receivedmint_events_max_fields"],
	min?:ValueTypes["receivedmint_events_min_fields"],
	stddev?:ValueTypes["receivedmint_events_stddev_fields"],
	stddev_pop?:ValueTypes["receivedmint_events_stddev_pop_fields"],
	stddev_samp?:ValueTypes["receivedmint_events_stddev_samp_fields"],
	sum?:ValueTypes["receivedmint_events_sum_fields"],
	var_pop?:ValueTypes["receivedmint_events_var_pop_fields"],
	var_samp?:ValueTypes["receivedmint_events_var_samp_fields"],
	variance?:ValueTypes["receivedmint_events_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["receivedmint_events_avg_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "receivedmint_events". All fields are combined with a logical 'AND'. */
["receivedmint_events_bool_exp"]: {
	_and?:ValueTypes["receivedmint_events_bool_exp"][],
	_not?:ValueTypes["receivedmint_events_bool_exp"] | null,
	_or?:ValueTypes["receivedmint_events_bool_exp"][],
	amount?:ValueTypes["bigint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	key?:ValueTypes["String_comparison_exp"] | null,
	receiver?:ValueTypes["bpchar_comparison_exp"] | null,
	sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	transaction_version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "receivedmint_events" */
["receivedmint_events_constraint"]:receivedmint_events_constraint;
	/** input type for incrementing numeric columns in table "receivedmint_events" */
["receivedmint_events_inc_input"]: {
	amount?:ValueTypes["bigint"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "receivedmint_events" */
["receivedmint_events_insert_input"]: {
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	receiver?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["receivedmint_events_max_fields"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	receiver?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["receivedmint_events_min_fields"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	receiver?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "receivedmint_events" */
["receivedmint_events_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["receivedmint_events"],
		__typename?: true
}>;
	/** on conflict condition type for table "receivedmint_events" */
["receivedmint_events_on_conflict"]: {
	constraint:ValueTypes["receivedmint_events_constraint"],
	update_columns:ValueTypes["receivedmint_events_update_column"][],
	where?:ValueTypes["receivedmint_events_bool_exp"] | null
};
	/** Ordering options when selecting data from "receivedmint_events". */
["receivedmint_events_order_by"]: {
	amount?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	key?:ValueTypes["order_by"] | null,
	receiver?:ValueTypes["order_by"] | null,
	sequence_number?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	transaction_version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: receivedmint_events */
["receivedmint_events_pk_columns_input"]: {
	key:string,
	sequence_number:ValueTypes["bigint"]
};
	/** select columns of table "receivedmint_events" */
["receivedmint_events_select_column"]:receivedmint_events_select_column;
	/** input type for updating data in table "receivedmint_events" */
["receivedmint_events_set_input"]: {
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	receiver?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["receivedmint_events_stddev_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["receivedmint_events_stddev_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["receivedmint_events_stddev_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["receivedmint_events_sum_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** update columns of table "receivedmint_events" */
["receivedmint_events_update_column"]:receivedmint_events_update_column;
	/** aggregate var_pop on columns */
["receivedmint_events_var_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["receivedmint_events_var_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["receivedmint_events_variance_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** columns and relationships of "sentpayment_events" */
["sentpayment_events"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	metadata?:true,
	receiver?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregated selection of "sentpayment_events" */
["sentpayment_events_aggregate"]: AliasType<{
	aggregate?:ValueTypes["sentpayment_events_aggregate_fields"],
	nodes?:ValueTypes["sentpayment_events"],
		__typename?: true
}>;
	/** aggregate fields of "sentpayment_events" */
["sentpayment_events_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["sentpayment_events_avg_fields"],
count?: [{	columns?:ValueTypes["sentpayment_events_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["sentpayment_events_max_fields"],
	min?:ValueTypes["sentpayment_events_min_fields"],
	stddev?:ValueTypes["sentpayment_events_stddev_fields"],
	stddev_pop?:ValueTypes["sentpayment_events_stddev_pop_fields"],
	stddev_samp?:ValueTypes["sentpayment_events_stddev_samp_fields"],
	sum?:ValueTypes["sentpayment_events_sum_fields"],
	var_pop?:ValueTypes["sentpayment_events_var_pop_fields"],
	var_samp?:ValueTypes["sentpayment_events_var_samp_fields"],
	variance?:ValueTypes["sentpayment_events_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["sentpayment_events_avg_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "sentpayment_events". All fields are combined with a logical 'AND'. */
["sentpayment_events_bool_exp"]: {
	_and?:ValueTypes["sentpayment_events_bool_exp"][],
	_not?:ValueTypes["sentpayment_events_bool_exp"] | null,
	_or?:ValueTypes["sentpayment_events_bool_exp"][],
	amount?:ValueTypes["bigint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	currency?:ValueTypes["bpchar_comparison_exp"] | null,
	key?:ValueTypes["String_comparison_exp"] | null,
	metadata?:ValueTypes["String_comparison_exp"] | null,
	receiver?:ValueTypes["bpchar_comparison_exp"] | null,
	sender?:ValueTypes["bpchar_comparison_exp"] | null,
	sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	transaction_version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "sentpayment_events" */
["sentpayment_events_constraint"]:sentpayment_events_constraint;
	/** input type for incrementing numeric columns in table "sentpayment_events" */
["sentpayment_events_inc_input"]: {
	amount?:ValueTypes["bigint"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "sentpayment_events" */
["sentpayment_events_insert_input"]: {
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	metadata?:string | null,
	receiver?:ValueTypes["bpchar"] | null,
	sender?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["sentpayment_events_max_fields"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	metadata?:true,
	receiver?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["sentpayment_events_min_fields"]: AliasType<{
	amount?:true,
	commit_timestamp?:true,
	currency?:true,
	key?:true,
	metadata?:true,
	receiver?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "sentpayment_events" */
["sentpayment_events_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["sentpayment_events"],
		__typename?: true
}>;
	/** on conflict condition type for table "sentpayment_events" */
["sentpayment_events_on_conflict"]: {
	constraint:ValueTypes["sentpayment_events_constraint"],
	update_columns:ValueTypes["sentpayment_events_update_column"][],
	where?:ValueTypes["sentpayment_events_bool_exp"] | null
};
	/** Ordering options when selecting data from "sentpayment_events". */
["sentpayment_events_order_by"]: {
	amount?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	currency?:ValueTypes["order_by"] | null,
	key?:ValueTypes["order_by"] | null,
	metadata?:ValueTypes["order_by"] | null,
	receiver?:ValueTypes["order_by"] | null,
	sender?:ValueTypes["order_by"] | null,
	sequence_number?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	transaction_version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: sentpayment_events */
["sentpayment_events_pk_columns_input"]: {
	key:string,
	sequence_number:ValueTypes["bigint"]
};
	/** select columns of table "sentpayment_events" */
["sentpayment_events_select_column"]:sentpayment_events_select_column;
	/** input type for updating data in table "sentpayment_events" */
["sentpayment_events_set_input"]: {
	amount?:ValueTypes["bigint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	currency?:ValueTypes["bpchar"] | null,
	key?:string | null,
	metadata?:string | null,
	receiver?:ValueTypes["bpchar"] | null,
	sender?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	transaction_version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["sentpayment_events_stddev_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["sentpayment_events_stddev_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["sentpayment_events_stddev_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["sentpayment_events_sum_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** update columns of table "sentpayment_events" */
["sentpayment_events_update_column"]:sentpayment_events_update_column;
	/** aggregate var_pop on columns */
["sentpayment_events_var_pop_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["sentpayment_events_var_samp_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["sentpayment_events_variance_fields"]: AliasType<{
	amount?:true,
	sequence_number?:true,
	status?:true,
	transaction_version?:true,
		__typename?: true
}>;
	["smallint"]:unknown;
	/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
["smallint_comparison_exp"]: {
	_eq?:ValueTypes["smallint"] | null,
	_gt?:ValueTypes["smallint"] | null,
	_gte?:ValueTypes["smallint"] | null,
	_in?:ValueTypes["smallint"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["smallint"] | null,
	_lte?:ValueTypes["smallint"] | null,
	_neq?:ValueTypes["smallint"] | null,
	_nin?:ValueTypes["smallint"][]
};
	["subscription_root"]: AliasType<{
accounts?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_bool_exp"] | null},ValueTypes["accounts"]],
accounts_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_bool_exp"] | null},ValueTypes["accounts_aggregate"]],
accounts_balances?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_balances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_balances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_balances_bool_exp"] | null},ValueTypes["accounts_balances"]],
accounts_balances_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["accounts_balances_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["accounts_balances_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["accounts_balances_bool_exp"] | null},ValueTypes["accounts_balances_aggregate"]],
accounts_balances_by_pk?: [{	address:ValueTypes["bpchar"],	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["accounts_balances"]],
accounts_by_pk?: [{	address:ValueTypes["bpchar"]},ValueTypes["accounts"]],
burn_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burn_events_bool_exp"] | null},ValueTypes["burn_events"]],
burn_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burn_events_bool_exp"] | null},ValueTypes["burn_events_aggregate"]],
burn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["burn_events"]],
burns?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burns_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burns_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burns_bool_exp"] | null},ValueTypes["burns"]],
burns_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["burns_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["burns_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["burns_bool_exp"] | null},ValueTypes["burns_aggregate"]],
diem_in_circulation_realtime_aggregates?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["diem_in_circulation_realtime_aggregates_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["diem_in_circulation_realtime_aggregates_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null},ValueTypes["diem_in_circulation_realtime_aggregates"]],
diem_in_circulation_realtime_aggregates_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["diem_in_circulation_realtime_aggregates_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["diem_in_circulation_realtime_aggregates_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["diem_in_circulation_realtime_aggregates_bool_exp"] | null},ValueTypes["diem_in_circulation_realtime_aggregates_aggregate"]],
diem_in_circulation_realtime_aggregates_by_pk?: [{	currency:ValueTypes["bpchar"],	version:ValueTypes["bigint"]},ValueTypes["diem_in_circulation_realtime_aggregates"]],
gas_payments?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["gas_payments_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["gas_payments_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["gas_payments_bool_exp"] | null},ValueTypes["gas_payments"]],
gas_payments_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["gas_payments_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["gas_payments_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["gas_payments_bool_exp"] | null},ValueTypes["gas_payments_aggregate"]],
gas_payments_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["gas_payments"]],
preburn_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["preburn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["preburn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["preburn_events_bool_exp"] | null},ValueTypes["preburn_events"]],
preburn_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["preburn_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["preburn_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["preburn_events_bool_exp"] | null},ValueTypes["preburn_events_aggregate"]],
preburn_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["preburn_events"]],
receivedmint_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["receivedmint_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["receivedmint_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["receivedmint_events_bool_exp"] | null},ValueTypes["receivedmint_events"]],
receivedmint_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["receivedmint_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["receivedmint_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["receivedmint_events_bool_exp"] | null},ValueTypes["receivedmint_events_aggregate"]],
receivedmint_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["receivedmint_events"]],
sentpayment_events?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["sentpayment_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["sentpayment_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["sentpayment_events_bool_exp"] | null},ValueTypes["sentpayment_events"]],
sentpayment_events_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["sentpayment_events_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["sentpayment_events_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["sentpayment_events_bool_exp"] | null},ValueTypes["sentpayment_events_aggregate"]],
sentpayment_events_by_pk?: [{	key:string,	sequence_number:ValueTypes["bigint"]},ValueTypes["sentpayment_events"]],
transactions?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["transactions_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["transactions_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["transactions_bool_exp"] | null},ValueTypes["transactions"]],
transactions_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["transactions_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["transactions_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["transactions_bool_exp"] | null},ValueTypes["transactions_aggregate"]],
transactions_by_pk?: [{	version:ValueTypes["bigint"]},ValueTypes["transactions"]],
		__typename?: true
}>;
	["timestamptz"]:unknown;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
	_eq?:ValueTypes["timestamptz"] | null,
	_gt?:ValueTypes["timestamptz"] | null,
	_gte?:ValueTypes["timestamptz"] | null,
	_in?:ValueTypes["timestamptz"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["timestamptz"] | null,
	_lte?:ValueTypes["timestamptz"] | null,
	_neq?:ValueTypes["timestamptz"] | null,
	_nin?:ValueTypes["timestamptz"][]
};
	/** columns and relationships of "transactions" */
["transactions"]: AliasType<{
	chain_id?:true,
	commit_timestamp?:true,
	expiration_timestamp?:true,
	gas_currency?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	public_key?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregated selection of "transactions" */
["transactions_aggregate"]: AliasType<{
	aggregate?:ValueTypes["transactions_aggregate_fields"],
	nodes?:ValueTypes["transactions"],
		__typename?: true
}>;
	/** aggregate fields of "transactions" */
["transactions_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["transactions_avg_fields"],
count?: [{	columns?:ValueTypes["transactions_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["transactions_max_fields"],
	min?:ValueTypes["transactions_min_fields"],
	stddev?:ValueTypes["transactions_stddev_fields"],
	stddev_pop?:ValueTypes["transactions_stddev_pop_fields"],
	stddev_samp?:ValueTypes["transactions_stddev_samp_fields"],
	sum?:ValueTypes["transactions_sum_fields"],
	var_pop?:ValueTypes["transactions_var_pop_fields"],
	var_samp?:ValueTypes["transactions_var_samp_fields"],
	variance?:ValueTypes["transactions_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["transactions_avg_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
["transactions_bool_exp"]: {
	_and?:ValueTypes["transactions_bool_exp"][],
	_not?:ValueTypes["transactions_bool_exp"] | null,
	_or?:ValueTypes["transactions_bool_exp"][],
	chain_id?:ValueTypes["smallint_comparison_exp"] | null,
	commit_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	expiration_timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	gas_currency?:ValueTypes["bpchar_comparison_exp"] | null,
	gas_unit_price?:ValueTypes["bigint_comparison_exp"] | null,
	gas_used?:ValueTypes["bigint_comparison_exp"] | null,
	max_gas_amount?:ValueTypes["bigint_comparison_exp"] | null,
	public_key?:ValueTypes["String_comparison_exp"] | null,
	sender?:ValueTypes["bpchar_comparison_exp"] | null,
	sequence_number?:ValueTypes["bigint_comparison_exp"] | null,
	status?:ValueTypes["Int_comparison_exp"] | null,
	txn_type?:ValueTypes["Int_comparison_exp"] | null,
	version?:ValueTypes["bigint_comparison_exp"] | null
};
	/** unique or primary key constraints on table "transactions" */
["transactions_constraint"]:transactions_constraint;
	/** input type for incrementing numeric columns in table "transactions" */
["transactions_inc_input"]: {
	chain_id?:ValueTypes["smallint"] | null,
	gas_unit_price?:ValueTypes["bigint"] | null,
	gas_used?:ValueTypes["bigint"] | null,
	max_gas_amount?:ValueTypes["bigint"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	txn_type?:number | null,
	version?:ValueTypes["bigint"] | null
};
	/** input type for inserting data into table "transactions" */
["transactions_insert_input"]: {
	chain_id?:ValueTypes["smallint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	expiration_timestamp?:ValueTypes["timestamptz"] | null,
	gas_currency?:ValueTypes["bpchar"] | null,
	gas_unit_price?:ValueTypes["bigint"] | null,
	gas_used?:ValueTypes["bigint"] | null,
	max_gas_amount?:ValueTypes["bigint"] | null,
	public_key?:string | null,
	sender?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	txn_type?:number | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate max on columns */
["transactions_max_fields"]: AliasType<{
	chain_id?:true,
	commit_timestamp?:true,
	expiration_timestamp?:true,
	gas_currency?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	public_key?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["transactions_min_fields"]: AliasType<{
	chain_id?:true,
	commit_timestamp?:true,
	expiration_timestamp?:true,
	gas_currency?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	public_key?:true,
	sender?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "transactions" */
["transactions_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["transactions"],
		__typename?: true
}>;
	/** on conflict condition type for table "transactions" */
["transactions_on_conflict"]: {
	constraint:ValueTypes["transactions_constraint"],
	update_columns:ValueTypes["transactions_update_column"][],
	where?:ValueTypes["transactions_bool_exp"] | null
};
	/** Ordering options when selecting data from "transactions". */
["transactions_order_by"]: {
	chain_id?:ValueTypes["order_by"] | null,
	commit_timestamp?:ValueTypes["order_by"] | null,
	expiration_timestamp?:ValueTypes["order_by"] | null,
	gas_currency?:ValueTypes["order_by"] | null,
	gas_unit_price?:ValueTypes["order_by"] | null,
	gas_used?:ValueTypes["order_by"] | null,
	max_gas_amount?:ValueTypes["order_by"] | null,
	public_key?:ValueTypes["order_by"] | null,
	sender?:ValueTypes["order_by"] | null,
	sequence_number?:ValueTypes["order_by"] | null,
	status?:ValueTypes["order_by"] | null,
	txn_type?:ValueTypes["order_by"] | null,
	version?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: transactions */
["transactions_pk_columns_input"]: {
	version:ValueTypes["bigint"]
};
	/** select columns of table "transactions" */
["transactions_select_column"]:transactions_select_column;
	/** input type for updating data in table "transactions" */
["transactions_set_input"]: {
	chain_id?:ValueTypes["smallint"] | null,
	commit_timestamp?:ValueTypes["timestamptz"] | null,
	expiration_timestamp?:ValueTypes["timestamptz"] | null,
	gas_currency?:ValueTypes["bpchar"] | null,
	gas_unit_price?:ValueTypes["bigint"] | null,
	gas_used?:ValueTypes["bigint"] | null,
	max_gas_amount?:ValueTypes["bigint"] | null,
	public_key?:string | null,
	sender?:ValueTypes["bpchar"] | null,
	sequence_number?:ValueTypes["bigint"] | null,
	status?:number | null,
	txn_type?:number | null,
	version?:ValueTypes["bigint"] | null
};
	/** aggregate stddev on columns */
["transactions_stddev_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["transactions_stddev_pop_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["transactions_stddev_samp_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["transactions_sum_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** update columns of table "transactions" */
["transactions_update_column"]:transactions_update_column;
	/** aggregate var_pop on columns */
["transactions_var_pop_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["transactions_var_samp_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["transactions_variance_fields"]: AliasType<{
	chain_id?:true,
	gas_unit_price?:true,
	gas_used?:true,
	max_gas_amount?:true,
	sequence_number?:true,
	status?:true,
	txn_type?:true,
	version?:true,
		__typename?: true
}>
  }

export type ModelTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: GraphQLTypes["Int_comparison_exp"];
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** columns and relationships of "accounts" */
["accounts"]: {
		address:ModelTypes["bpchar"],
	authentication_key:string,
	base_url?:string,
	base_url_rotation_events_key?:string,
	compliance_key?:string,
	compliance_key_rotation_events_key?:string,
	create_account_event_stream_sequence_number:ModelTypes["bigint"],
	delegated_key_rotation_capability:boolean,
	delegated_withdrawal_capability:boolean,
	diem_id_domain_events_key?:string,
	expiration_time?:ModelTypes["timestamptz"],
	human_name?:string,
	indexed_at:ModelTypes["timestamptz"],
	is_frozen:boolean,
	parent_vasp_address?:ModelTypes["bpchar"],
	received_events_key:string,
	received_mint_events_key?:string,
	role:number,
	sent_events_key:string,
	transaction_version:ModelTypes["bigint"]
};
	/** aggregated selection of "accounts" */
["accounts_aggregate"]: {
		aggregate?:ModelTypes["accounts_aggregate_fields"],
	nodes:ModelTypes["accounts"][]
};
	/** aggregate fields of "accounts" */
["accounts_aggregate_fields"]: {
		avg?:ModelTypes["accounts_avg_fields"],
	count:number,
	max?:ModelTypes["accounts_max_fields"],
	min?:ModelTypes["accounts_min_fields"],
	stddev?:ModelTypes["accounts_stddev_fields"],
	stddev_pop?:ModelTypes["accounts_stddev_pop_fields"],
	stddev_samp?:ModelTypes["accounts_stddev_samp_fields"],
	sum?:ModelTypes["accounts_sum_fields"],
	var_pop?:ModelTypes["accounts_var_pop_fields"],
	var_samp?:ModelTypes["accounts_var_samp_fields"],
	variance?:ModelTypes["accounts_variance_fields"]
};
	/** aggregate avg on columns */
["accounts_avg_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** columns and relationships of "accounts_balances" */
["accounts_balances"]: {
		address:ModelTypes["bpchar"],
	balance:ModelTypes["bigint"],
	currency:ModelTypes["bpchar"],
	timestamp:ModelTypes["timestamptz"],
	version:ModelTypes["bigint"]
};
	/** aggregated selection of "accounts_balances" */
["accounts_balances_aggregate"]: {
		aggregate?:ModelTypes["accounts_balances_aggregate_fields"],
	nodes:ModelTypes["accounts_balances"][]
};
	/** aggregate fields of "accounts_balances" */
["accounts_balances_aggregate_fields"]: {
		avg?:ModelTypes["accounts_balances_avg_fields"],
	count:number,
	max?:ModelTypes["accounts_balances_max_fields"],
	min?:ModelTypes["accounts_balances_min_fields"],
	stddev?:ModelTypes["accounts_balances_stddev_fields"],
	stddev_pop?:ModelTypes["accounts_balances_stddev_pop_fields"],
	stddev_samp?:ModelTypes["accounts_balances_stddev_samp_fields"],
	sum?:ModelTypes["accounts_balances_sum_fields"],
	var_pop?:ModelTypes["accounts_balances_var_pop_fields"],
	var_samp?:ModelTypes["accounts_balances_var_samp_fields"],
	variance?:ModelTypes["accounts_balances_variance_fields"]
};
	/** aggregate avg on columns */
["accounts_balances_avg_fields"]: {
		balance?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "accounts_balances". All fields are combined with a logical 'AND'. */
["accounts_balances_bool_exp"]: GraphQLTypes["accounts_balances_bool_exp"];
	/** unique or primary key constraints on table "accounts_balances" */
["accounts_balances_constraint"]: GraphQLTypes["accounts_balances_constraint"];
	/** input type for incrementing numeric columns in table "accounts_balances" */
["accounts_balances_inc_input"]: GraphQLTypes["accounts_balances_inc_input"];
	/** input type for inserting data into table "accounts_balances" */
["accounts_balances_insert_input"]: GraphQLTypes["accounts_balances_insert_input"];
	/** aggregate max on columns */
["accounts_balances_max_fields"]: {
		address?:ModelTypes["bpchar"],
	balance?:ModelTypes["bigint"],
	currency?:ModelTypes["bpchar"],
	timestamp?:ModelTypes["timestamptz"],
	version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["accounts_balances_min_fields"]: {
		address?:ModelTypes["bpchar"],
	balance?:ModelTypes["bigint"],
	currency?:ModelTypes["bpchar"],
	timestamp?:ModelTypes["timestamptz"],
	version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "accounts_balances" */
["accounts_balances_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["accounts_balances"][]
};
	/** on conflict condition type for table "accounts_balances" */
["accounts_balances_on_conflict"]: GraphQLTypes["accounts_balances_on_conflict"];
	/** Ordering options when selecting data from "accounts_balances". */
["accounts_balances_order_by"]: GraphQLTypes["accounts_balances_order_by"];
	/** primary key columns input for table: accounts_balances */
["accounts_balances_pk_columns_input"]: GraphQLTypes["accounts_balances_pk_columns_input"];
	/** select columns of table "accounts_balances" */
["accounts_balances_select_column"]: GraphQLTypes["accounts_balances_select_column"];
	/** input type for updating data in table "accounts_balances" */
["accounts_balances_set_input"]: GraphQLTypes["accounts_balances_set_input"];
	/** aggregate stddev on columns */
["accounts_balances_stddev_fields"]: {
		balance?:number,
	version?:number
};
	/** aggregate stddev_pop on columns */
["accounts_balances_stddev_pop_fields"]: {
		balance?:number,
	version?:number
};
	/** aggregate stddev_samp on columns */
["accounts_balances_stddev_samp_fields"]: {
		balance?:number,
	version?:number
};
	/** aggregate sum on columns */
["accounts_balances_sum_fields"]: {
		balance?:ModelTypes["bigint"],
	version?:ModelTypes["bigint"]
};
	/** update columns of table "accounts_balances" */
["accounts_balances_update_column"]: GraphQLTypes["accounts_balances_update_column"];
	/** aggregate var_pop on columns */
["accounts_balances_var_pop_fields"]: {
		balance?:number,
	version?:number
};
	/** aggregate var_samp on columns */
["accounts_balances_var_samp_fields"]: {
		balance?:number,
	version?:number
};
	/** aggregate variance on columns */
["accounts_balances_variance_fields"]: {
		balance?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
["accounts_bool_exp"]: GraphQLTypes["accounts_bool_exp"];
	/** unique or primary key constraints on table "accounts" */
["accounts_constraint"]: GraphQLTypes["accounts_constraint"];
	/** input type for incrementing numeric columns in table "accounts" */
["accounts_inc_input"]: GraphQLTypes["accounts_inc_input"];
	/** input type for inserting data into table "accounts" */
["accounts_insert_input"]: GraphQLTypes["accounts_insert_input"];
	/** aggregate max on columns */
["accounts_max_fields"]: {
		address?:ModelTypes["bpchar"],
	authentication_key?:string,
	base_url?:string,
	base_url_rotation_events_key?:string,
	compliance_key?:string,
	compliance_key_rotation_events_key?:string,
	create_account_event_stream_sequence_number?:ModelTypes["bigint"],
	diem_id_domain_events_key?:string,
	expiration_time?:ModelTypes["timestamptz"],
	human_name?:string,
	indexed_at?:ModelTypes["timestamptz"],
	parent_vasp_address?:ModelTypes["bpchar"],
	received_events_key?:string,
	received_mint_events_key?:string,
	role?:number,
	sent_events_key?:string,
	transaction_version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["accounts_min_fields"]: {
		address?:ModelTypes["bpchar"],
	authentication_key?:string,
	base_url?:string,
	base_url_rotation_events_key?:string,
	compliance_key?:string,
	compliance_key_rotation_events_key?:string,
	create_account_event_stream_sequence_number?:ModelTypes["bigint"],
	diem_id_domain_events_key?:string,
	expiration_time?:ModelTypes["timestamptz"],
	human_name?:string,
	indexed_at?:ModelTypes["timestamptz"],
	parent_vasp_address?:ModelTypes["bpchar"],
	received_events_key?:string,
	received_mint_events_key?:string,
	role?:number,
	sent_events_key?:string,
	transaction_version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "accounts" */
["accounts_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["accounts"][]
};
	/** on conflict condition type for table "accounts" */
["accounts_on_conflict"]: GraphQLTypes["accounts_on_conflict"];
	/** Ordering options when selecting data from "accounts". */
["accounts_order_by"]: GraphQLTypes["accounts_order_by"];
	/** primary key columns input for table: accounts */
["accounts_pk_columns_input"]: GraphQLTypes["accounts_pk_columns_input"];
	/** select columns of table "accounts" */
["accounts_select_column"]: GraphQLTypes["accounts_select_column"];
	/** input type for updating data in table "accounts" */
["accounts_set_input"]: GraphQLTypes["accounts_set_input"];
	/** aggregate stddev on columns */
["accounts_stddev_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** aggregate stddev_pop on columns */
["accounts_stddev_pop_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** aggregate stddev_samp on columns */
["accounts_stddev_samp_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** aggregate sum on columns */
["accounts_sum_fields"]: {
		create_account_event_stream_sequence_number?:ModelTypes["bigint"],
	role?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** update columns of table "accounts" */
["accounts_update_column"]: GraphQLTypes["accounts_update_column"];
	/** aggregate var_pop on columns */
["accounts_var_pop_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** aggregate var_samp on columns */
["accounts_var_samp_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	/** aggregate variance on columns */
["accounts_variance_fields"]: {
		create_account_event_stream_sequence_number?:number,
	role?:number,
	transaction_version?:number
};
	["bigint"]:any;
	/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: GraphQLTypes["bigint_comparison_exp"];
	["bpchar"]:any;
	/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
["bpchar_comparison_exp"]: GraphQLTypes["bpchar_comparison_exp"];
	/** columns and relationships of "burn_events" */
["burn_events"]: {
		address:ModelTypes["bpchar"],
	amount:ModelTypes["bigint"],
	commit_timestamp:ModelTypes["timestamptz"],
	currency:ModelTypes["bpchar"],
	key:string,
	sequence_number:ModelTypes["bigint"],
	status:number,
	transaction_version:ModelTypes["bigint"]
};
	/** aggregated selection of "burn_events" */
["burn_events_aggregate"]: {
		aggregate?:ModelTypes["burn_events_aggregate_fields"],
	nodes:ModelTypes["burn_events"][]
};
	/** aggregate fields of "burn_events" */
["burn_events_aggregate_fields"]: {
		avg?:ModelTypes["burn_events_avg_fields"],
	count:number,
	max?:ModelTypes["burn_events_max_fields"],
	min?:ModelTypes["burn_events_min_fields"],
	stddev?:ModelTypes["burn_events_stddev_fields"],
	stddev_pop?:ModelTypes["burn_events_stddev_pop_fields"],
	stddev_samp?:ModelTypes["burn_events_stddev_samp_fields"],
	sum?:ModelTypes["burn_events_sum_fields"],
	var_pop?:ModelTypes["burn_events_var_pop_fields"],
	var_samp?:ModelTypes["burn_events_var_samp_fields"],
	variance?:ModelTypes["burn_events_variance_fields"]
};
	/** aggregate avg on columns */
["burn_events_avg_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** Boolean expression to filter rows from the table "burn_events". All fields are combined with a logical 'AND'. */
["burn_events_bool_exp"]: GraphQLTypes["burn_events_bool_exp"];
	/** unique or primary key constraints on table "burn_events" */
["burn_events_constraint"]: GraphQLTypes["burn_events_constraint"];
	/** input type for incrementing numeric columns in table "burn_events" */
["burn_events_inc_input"]: GraphQLTypes["burn_events_inc_input"];
	/** input type for inserting data into table "burn_events" */
["burn_events_insert_input"]: GraphQLTypes["burn_events_insert_input"];
	/** aggregate max on columns */
["burn_events_max_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["burn_events_min_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "burn_events" */
["burn_events_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["burn_events"][]
};
	/** on conflict condition type for table "burn_events" */
["burn_events_on_conflict"]: GraphQLTypes["burn_events_on_conflict"];
	/** Ordering options when selecting data from "burn_events". */
["burn_events_order_by"]: GraphQLTypes["burn_events_order_by"];
	/** primary key columns input for table: burn_events */
["burn_events_pk_columns_input"]: GraphQLTypes["burn_events_pk_columns_input"];
	/** select columns of table "burn_events" */
["burn_events_select_column"]: GraphQLTypes["burn_events_select_column"];
	/** input type for updating data in table "burn_events" */
["burn_events_set_input"]: GraphQLTypes["burn_events_set_input"];
	/** aggregate stddev on columns */
["burn_events_stddev_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_pop on columns */
["burn_events_stddev_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_samp on columns */
["burn_events_stddev_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate sum on columns */
["burn_events_sum_fields"]: {
		amount?:ModelTypes["bigint"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** update columns of table "burn_events" */
["burn_events_update_column"]: GraphQLTypes["burn_events_update_column"];
	/** aggregate var_pop on columns */
["burn_events_var_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate var_samp on columns */
["burn_events_var_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate variance on columns */
["burn_events_variance_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** columns and relationships of "burns" */
["burns"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	status?:number,
	version?:ModelTypes["bigint"]
};
	/** aggregated selection of "burns" */
["burns_aggregate"]: {
		aggregate?:ModelTypes["burns_aggregate_fields"],
	nodes:ModelTypes["burns"][]
};
	/** aggregate fields of "burns" */
["burns_aggregate_fields"]: {
		avg?:ModelTypes["burns_avg_fields"],
	count:number,
	max?:ModelTypes["burns_max_fields"],
	min?:ModelTypes["burns_min_fields"],
	stddev?:ModelTypes["burns_stddev_fields"],
	stddev_pop?:ModelTypes["burns_stddev_pop_fields"],
	stddev_samp?:ModelTypes["burns_stddev_samp_fields"],
	sum?:ModelTypes["burns_sum_fields"],
	var_pop?:ModelTypes["burns_var_pop_fields"],
	var_samp?:ModelTypes["burns_var_samp_fields"],
	variance?:ModelTypes["burns_variance_fields"]
};
	/** aggregate avg on columns */
["burns_avg_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "burns". All fields are combined with a logical 'AND'. */
["burns_bool_exp"]: GraphQLTypes["burns_bool_exp"];
	/** aggregate max on columns */
["burns_max_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	status?:number,
	version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["burns_min_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	status?:number,
	version?:ModelTypes["bigint"]
};
	/** Ordering options when selecting data from "burns". */
["burns_order_by"]: GraphQLTypes["burns_order_by"];
	/** select columns of table "burns" */
["burns_select_column"]: GraphQLTypes["burns_select_column"];
	/** aggregate stddev on columns */
["burns_stddev_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** aggregate stddev_pop on columns */
["burns_stddev_pop_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** aggregate stddev_samp on columns */
["burns_stddev_samp_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** aggregate sum on columns */
["burns_sum_fields"]: {
		amount?:ModelTypes["bigint"],
	status?:number,
	version?:ModelTypes["bigint"]
};
	/** aggregate var_pop on columns */
["burns_var_pop_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** aggregate var_samp on columns */
["burns_var_samp_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** aggregate variance on columns */
["burns_variance_fields"]: {
		amount?:number,
	status?:number,
	version?:number
};
	/** columns and relationships of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates"]: {
		currency:ModelTypes["bpchar"],
	timestamp:ModelTypes["timestamptz"],
	total_burn_value:ModelTypes["bigint"],
	total_mint_value:ModelTypes["bigint"],
	total_net_value:ModelTypes["bigint"],
	version:ModelTypes["bigint"]
};
	/** aggregated selection of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate"]: {
		aggregate?:ModelTypes["diem_in_circulation_realtime_aggregates_aggregate_fields"],
	nodes:ModelTypes["diem_in_circulation_realtime_aggregates"][]
};
	/** aggregate fields of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate_fields"]: {
		avg?:ModelTypes["diem_in_circulation_realtime_aggregates_avg_fields"],
	count:number,
	max?:ModelTypes["diem_in_circulation_realtime_aggregates_max_fields"],
	min?:ModelTypes["diem_in_circulation_realtime_aggregates_min_fields"],
	stddev?:ModelTypes["diem_in_circulation_realtime_aggregates_stddev_fields"],
	stddev_pop?:ModelTypes["diem_in_circulation_realtime_aggregates_stddev_pop_fields"],
	stddev_samp?:ModelTypes["diem_in_circulation_realtime_aggregates_stddev_samp_fields"],
	sum?:ModelTypes["diem_in_circulation_realtime_aggregates_sum_fields"],
	var_pop?:ModelTypes["diem_in_circulation_realtime_aggregates_var_pop_fields"],
	var_samp?:ModelTypes["diem_in_circulation_realtime_aggregates_var_samp_fields"],
	variance?:ModelTypes["diem_in_circulation_realtime_aggregates_variance_fields"]
};
	/** aggregate avg on columns */
["diem_in_circulation_realtime_aggregates_avg_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "diem_in_circulation_realtime_aggregates". All fields are combined with a logical 'AND'. */
["diem_in_circulation_realtime_aggregates_bool_exp"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_bool_exp"];
	/** unique or primary key constraints on table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_constraint"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_constraint"];
	/** input type for incrementing numeric columns in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_inc_input"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_inc_input"];
	/** input type for inserting data into table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_insert_input"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_insert_input"];
	/** aggregate max on columns */
["diem_in_circulation_realtime_aggregates_max_fields"]: {
		currency?:ModelTypes["bpchar"],
	timestamp?:ModelTypes["timestamptz"],
	total_burn_value?:ModelTypes["bigint"],
	total_mint_value?:ModelTypes["bigint"],
	total_net_value?:ModelTypes["bigint"],
	version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["diem_in_circulation_realtime_aggregates_min_fields"]: {
		currency?:ModelTypes["bpchar"],
	timestamp?:ModelTypes["timestamptz"],
	total_burn_value?:ModelTypes["bigint"],
	total_mint_value?:ModelTypes["bigint"],
	total_net_value?:ModelTypes["bigint"],
	version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["diem_in_circulation_realtime_aggregates"][]
};
	/** on conflict condition type for table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_on_conflict"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_on_conflict"];
	/** Ordering options when selecting data from "diem_in_circulation_realtime_aggregates". */
["diem_in_circulation_realtime_aggregates_order_by"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_order_by"];
	/** primary key columns input for table: diem_in_circulation_realtime_aggregates */
["diem_in_circulation_realtime_aggregates_pk_columns_input"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_pk_columns_input"];
	/** select columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_select_column"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_select_column"];
	/** input type for updating data in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_set_input"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_set_input"];
	/** aggregate stddev on columns */
["diem_in_circulation_realtime_aggregates_stddev_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** aggregate stddev_pop on columns */
["diem_in_circulation_realtime_aggregates_stddev_pop_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** aggregate stddev_samp on columns */
["diem_in_circulation_realtime_aggregates_stddev_samp_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** aggregate sum on columns */
["diem_in_circulation_realtime_aggregates_sum_fields"]: {
		total_burn_value?:ModelTypes["bigint"],
	total_mint_value?:ModelTypes["bigint"],
	total_net_value?:ModelTypes["bigint"],
	version?:ModelTypes["bigint"]
};
	/** update columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_update_column"]: GraphQLTypes["diem_in_circulation_realtime_aggregates_update_column"];
	/** aggregate var_pop on columns */
["diem_in_circulation_realtime_aggregates_var_pop_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** aggregate var_samp on columns */
["diem_in_circulation_realtime_aggregates_var_samp_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** aggregate variance on columns */
["diem_in_circulation_realtime_aggregates_variance_fields"]: {
		total_burn_value?:number,
	total_mint_value?:number,
	total_net_value?:number,
	version?:number
};
	/** columns and relationships of "gas_payments" */
["gas_payments"]: {
		commit_timestamp:ModelTypes["timestamptz"],
	currency:ModelTypes["bpchar"],
	gas_paid:ModelTypes["bigint"],
	receiver:ModelTypes["bpchar"],
	sender:ModelTypes["bpchar"],
	version:ModelTypes["bigint"]
};
	/** aggregated selection of "gas_payments" */
["gas_payments_aggregate"]: {
		aggregate?:ModelTypes["gas_payments_aggregate_fields"],
	nodes:ModelTypes["gas_payments"][]
};
	/** aggregate fields of "gas_payments" */
["gas_payments_aggregate_fields"]: {
		avg?:ModelTypes["gas_payments_avg_fields"],
	count:number,
	max?:ModelTypes["gas_payments_max_fields"],
	min?:ModelTypes["gas_payments_min_fields"],
	stddev?:ModelTypes["gas_payments_stddev_fields"],
	stddev_pop?:ModelTypes["gas_payments_stddev_pop_fields"],
	stddev_samp?:ModelTypes["gas_payments_stddev_samp_fields"],
	sum?:ModelTypes["gas_payments_sum_fields"],
	var_pop?:ModelTypes["gas_payments_var_pop_fields"],
	var_samp?:ModelTypes["gas_payments_var_samp_fields"],
	variance?:ModelTypes["gas_payments_variance_fields"]
};
	/** aggregate avg on columns */
["gas_payments_avg_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "gas_payments". All fields are combined with a logical 'AND'. */
["gas_payments_bool_exp"]: GraphQLTypes["gas_payments_bool_exp"];
	/** unique or primary key constraints on table "gas_payments" */
["gas_payments_constraint"]: GraphQLTypes["gas_payments_constraint"];
	/** input type for incrementing numeric columns in table "gas_payments" */
["gas_payments_inc_input"]: GraphQLTypes["gas_payments_inc_input"];
	/** input type for inserting data into table "gas_payments" */
["gas_payments_insert_input"]: GraphQLTypes["gas_payments_insert_input"];
	/** aggregate max on columns */
["gas_payments_max_fields"]: {
		commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	gas_paid?:ModelTypes["bigint"],
	receiver?:ModelTypes["bpchar"],
	sender?:ModelTypes["bpchar"],
	version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["gas_payments_min_fields"]: {
		commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	gas_paid?:ModelTypes["bigint"],
	receiver?:ModelTypes["bpchar"],
	sender?:ModelTypes["bpchar"],
	version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "gas_payments" */
["gas_payments_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["gas_payments"][]
};
	/** on conflict condition type for table "gas_payments" */
["gas_payments_on_conflict"]: GraphQLTypes["gas_payments_on_conflict"];
	/** Ordering options when selecting data from "gas_payments". */
["gas_payments_order_by"]: GraphQLTypes["gas_payments_order_by"];
	/** primary key columns input for table: gas_payments */
["gas_payments_pk_columns_input"]: GraphQLTypes["gas_payments_pk_columns_input"];
	/** select columns of table "gas_payments" */
["gas_payments_select_column"]: GraphQLTypes["gas_payments_select_column"];
	/** input type for updating data in table "gas_payments" */
["gas_payments_set_input"]: GraphQLTypes["gas_payments_set_input"];
	/** aggregate stddev on columns */
["gas_payments_stddev_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** aggregate stddev_pop on columns */
["gas_payments_stddev_pop_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** aggregate stddev_samp on columns */
["gas_payments_stddev_samp_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** aggregate sum on columns */
["gas_payments_sum_fields"]: {
		gas_paid?:ModelTypes["bigint"],
	version?:ModelTypes["bigint"]
};
	/** update columns of table "gas_payments" */
["gas_payments_update_column"]: GraphQLTypes["gas_payments_update_column"];
	/** aggregate var_pop on columns */
["gas_payments_var_pop_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** aggregate var_samp on columns */
["gas_payments_var_samp_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** aggregate variance on columns */
["gas_payments_variance_fields"]: {
		gas_paid?:number,
	version?:number
};
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "accounts" */
	delete_accounts?:ModelTypes["accounts_mutation_response"],
	/** delete data from the table: "accounts_balances" */
	delete_accounts_balances?:ModelTypes["accounts_balances_mutation_response"],
	/** delete single row from the table: "accounts_balances" */
	delete_accounts_balances_by_pk?:ModelTypes["accounts_balances"],
	/** delete single row from the table: "accounts" */
	delete_accounts_by_pk?:ModelTypes["accounts"],
	/** delete data from the table: "burn_events" */
	delete_burn_events?:ModelTypes["burn_events_mutation_response"],
	/** delete single row from the table: "burn_events" */
	delete_burn_events_by_pk?:ModelTypes["burn_events"],
	/** delete data from the table: "diem_in_circulation_realtime_aggregates" */
	delete_diem_in_circulation_realtime_aggregates?:ModelTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** delete single row from the table: "diem_in_circulation_realtime_aggregates" */
	delete_diem_in_circulation_realtime_aggregates_by_pk?:ModelTypes["diem_in_circulation_realtime_aggregates"],
	/** delete data from the table: "gas_payments" */
	delete_gas_payments?:ModelTypes["gas_payments_mutation_response"],
	/** delete single row from the table: "gas_payments" */
	delete_gas_payments_by_pk?:ModelTypes["gas_payments"],
	/** delete data from the table: "preburn_events" */
	delete_preburn_events?:ModelTypes["preburn_events_mutation_response"],
	/** delete single row from the table: "preburn_events" */
	delete_preburn_events_by_pk?:ModelTypes["preburn_events"],
	/** delete data from the table: "receivedmint_events" */
	delete_receivedmint_events?:ModelTypes["receivedmint_events_mutation_response"],
	/** delete single row from the table: "receivedmint_events" */
	delete_receivedmint_events_by_pk?:ModelTypes["receivedmint_events"],
	/** delete data from the table: "sentpayment_events" */
	delete_sentpayment_events?:ModelTypes["sentpayment_events_mutation_response"],
	/** delete single row from the table: "sentpayment_events" */
	delete_sentpayment_events_by_pk?:ModelTypes["sentpayment_events"],
	/** delete data from the table: "transactions" */
	delete_transactions?:ModelTypes["transactions_mutation_response"],
	/** delete single row from the table: "transactions" */
	delete_transactions_by_pk?:ModelTypes["transactions"],
	/** insert data into the table: "accounts" */
	insert_accounts?:ModelTypes["accounts_mutation_response"],
	/** insert data into the table: "accounts_balances" */
	insert_accounts_balances?:ModelTypes["accounts_balances_mutation_response"],
	/** insert a single row into the table: "accounts_balances" */
	insert_accounts_balances_one?:ModelTypes["accounts_balances"],
	/** insert a single row into the table: "accounts" */
	insert_accounts_one?:ModelTypes["accounts"],
	/** insert data into the table: "burn_events" */
	insert_burn_events?:ModelTypes["burn_events_mutation_response"],
	/** insert a single row into the table: "burn_events" */
	insert_burn_events_one?:ModelTypes["burn_events"],
	/** insert data into the table: "diem_in_circulation_realtime_aggregates" */
	insert_diem_in_circulation_realtime_aggregates?:ModelTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** insert a single row into the table: "diem_in_circulation_realtime_aggregates" */
	insert_diem_in_circulation_realtime_aggregates_one?:ModelTypes["diem_in_circulation_realtime_aggregates"],
	/** insert data into the table: "gas_payments" */
	insert_gas_payments?:ModelTypes["gas_payments_mutation_response"],
	/** insert a single row into the table: "gas_payments" */
	insert_gas_payments_one?:ModelTypes["gas_payments"],
	/** insert data into the table: "preburn_events" */
	insert_preburn_events?:ModelTypes["preburn_events_mutation_response"],
	/** insert a single row into the table: "preburn_events" */
	insert_preburn_events_one?:ModelTypes["preburn_events"],
	/** insert data into the table: "receivedmint_events" */
	insert_receivedmint_events?:ModelTypes["receivedmint_events_mutation_response"],
	/** insert a single row into the table: "receivedmint_events" */
	insert_receivedmint_events_one?:ModelTypes["receivedmint_events"],
	/** insert data into the table: "sentpayment_events" */
	insert_sentpayment_events?:ModelTypes["sentpayment_events_mutation_response"],
	/** insert a single row into the table: "sentpayment_events" */
	insert_sentpayment_events_one?:ModelTypes["sentpayment_events"],
	/** insert data into the table: "transactions" */
	insert_transactions?:ModelTypes["transactions_mutation_response"],
	/** insert a single row into the table: "transactions" */
	insert_transactions_one?:ModelTypes["transactions"],
	/** update data of the table: "accounts" */
	update_accounts?:ModelTypes["accounts_mutation_response"],
	/** update data of the table: "accounts_balances" */
	update_accounts_balances?:ModelTypes["accounts_balances_mutation_response"],
	/** update single row of the table: "accounts_balances" */
	update_accounts_balances_by_pk?:ModelTypes["accounts_balances"],
	/** update single row of the table: "accounts" */
	update_accounts_by_pk?:ModelTypes["accounts"],
	/** update data of the table: "burn_events" */
	update_burn_events?:ModelTypes["burn_events_mutation_response"],
	/** update single row of the table: "burn_events" */
	update_burn_events_by_pk?:ModelTypes["burn_events"],
	/** update data of the table: "diem_in_circulation_realtime_aggregates" */
	update_diem_in_circulation_realtime_aggregates?:ModelTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** update single row of the table: "diem_in_circulation_realtime_aggregates" */
	update_diem_in_circulation_realtime_aggregates_by_pk?:ModelTypes["diem_in_circulation_realtime_aggregates"],
	/** update data of the table: "gas_payments" */
	update_gas_payments?:ModelTypes["gas_payments_mutation_response"],
	/** update single row of the table: "gas_payments" */
	update_gas_payments_by_pk?:ModelTypes["gas_payments"],
	/** update data of the table: "preburn_events" */
	update_preburn_events?:ModelTypes["preburn_events_mutation_response"],
	/** update single row of the table: "preburn_events" */
	update_preburn_events_by_pk?:ModelTypes["preburn_events"],
	/** update data of the table: "receivedmint_events" */
	update_receivedmint_events?:ModelTypes["receivedmint_events_mutation_response"],
	/** update single row of the table: "receivedmint_events" */
	update_receivedmint_events_by_pk?:ModelTypes["receivedmint_events"],
	/** update data of the table: "sentpayment_events" */
	update_sentpayment_events?:ModelTypes["sentpayment_events_mutation_response"],
	/** update single row of the table: "sentpayment_events" */
	update_sentpayment_events_by_pk?:ModelTypes["sentpayment_events"],
	/** update data of the table: "transactions" */
	update_transactions?:ModelTypes["transactions_mutation_response"],
	/** update single row of the table: "transactions" */
	update_transactions_by_pk?:ModelTypes["transactions"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	/** columns and relationships of "preburn_events" */
["preburn_events"]: {
		address:ModelTypes["bpchar"],
	amount:ModelTypes["bigint"],
	commit_timestamp:ModelTypes["timestamptz"],
	currency:ModelTypes["bpchar"],
	key:string,
	sequence_number:ModelTypes["bigint"],
	status:number,
	transaction_version:ModelTypes["bigint"]
};
	/** aggregated selection of "preburn_events" */
["preburn_events_aggregate"]: {
		aggregate?:ModelTypes["preburn_events_aggregate_fields"],
	nodes:ModelTypes["preburn_events"][]
};
	/** aggregate fields of "preburn_events" */
["preburn_events_aggregate_fields"]: {
		avg?:ModelTypes["preburn_events_avg_fields"],
	count:number,
	max?:ModelTypes["preburn_events_max_fields"],
	min?:ModelTypes["preburn_events_min_fields"],
	stddev?:ModelTypes["preburn_events_stddev_fields"],
	stddev_pop?:ModelTypes["preburn_events_stddev_pop_fields"],
	stddev_samp?:ModelTypes["preburn_events_stddev_samp_fields"],
	sum?:ModelTypes["preburn_events_sum_fields"],
	var_pop?:ModelTypes["preburn_events_var_pop_fields"],
	var_samp?:ModelTypes["preburn_events_var_samp_fields"],
	variance?:ModelTypes["preburn_events_variance_fields"]
};
	/** aggregate avg on columns */
["preburn_events_avg_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** Boolean expression to filter rows from the table "preburn_events". All fields are combined with a logical 'AND'. */
["preburn_events_bool_exp"]: GraphQLTypes["preburn_events_bool_exp"];
	/** unique or primary key constraints on table "preburn_events" */
["preburn_events_constraint"]: GraphQLTypes["preburn_events_constraint"];
	/** input type for incrementing numeric columns in table "preburn_events" */
["preburn_events_inc_input"]: GraphQLTypes["preburn_events_inc_input"];
	/** input type for inserting data into table "preburn_events" */
["preburn_events_insert_input"]: GraphQLTypes["preburn_events_insert_input"];
	/** aggregate max on columns */
["preburn_events_max_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["preburn_events_min_fields"]: {
		address?:ModelTypes["bpchar"],
	amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "preburn_events" */
["preburn_events_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["preburn_events"][]
};
	/** on conflict condition type for table "preburn_events" */
["preburn_events_on_conflict"]: GraphQLTypes["preburn_events_on_conflict"];
	/** Ordering options when selecting data from "preburn_events". */
["preburn_events_order_by"]: GraphQLTypes["preburn_events_order_by"];
	/** primary key columns input for table: preburn_events */
["preburn_events_pk_columns_input"]: GraphQLTypes["preburn_events_pk_columns_input"];
	/** select columns of table "preburn_events" */
["preburn_events_select_column"]: GraphQLTypes["preburn_events_select_column"];
	/** input type for updating data in table "preburn_events" */
["preburn_events_set_input"]: GraphQLTypes["preburn_events_set_input"];
	/** aggregate stddev on columns */
["preburn_events_stddev_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_pop on columns */
["preburn_events_stddev_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_samp on columns */
["preburn_events_stddev_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate sum on columns */
["preburn_events_sum_fields"]: {
		amount?:ModelTypes["bigint"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** update columns of table "preburn_events" */
["preburn_events_update_column"]: GraphQLTypes["preburn_events_update_column"];
	/** aggregate var_pop on columns */
["preburn_events_var_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate var_samp on columns */
["preburn_events_var_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate variance on columns */
["preburn_events_variance_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	["query_root"]: {
		/** fetch data from the table: "accounts" */
	accounts:ModelTypes["accounts"][],
	/** fetch aggregated fields from the table: "accounts" */
	accounts_aggregate:ModelTypes["accounts_aggregate"],
	/** fetch data from the table: "accounts_balances" */
	accounts_balances:ModelTypes["accounts_balances"][],
	/** fetch aggregated fields from the table: "accounts_balances" */
	accounts_balances_aggregate:ModelTypes["accounts_balances_aggregate"],
	/** fetch data from the table: "accounts_balances" using primary key columns */
	accounts_balances_by_pk?:ModelTypes["accounts_balances"],
	/** fetch data from the table: "accounts" using primary key columns */
	accounts_by_pk?:ModelTypes["accounts"],
	/** fetch data from the table: "burn_events" */
	burn_events:ModelTypes["burn_events"][],
	/** fetch aggregated fields from the table: "burn_events" */
	burn_events_aggregate:ModelTypes["burn_events_aggregate"],
	/** fetch data from the table: "burn_events" using primary key columns */
	burn_events_by_pk?:ModelTypes["burn_events"],
	/** fetch data from the table: "burns" */
	burns:ModelTypes["burns"][],
	/** fetch aggregated fields from the table: "burns" */
	burns_aggregate:ModelTypes["burns_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates:ModelTypes["diem_in_circulation_realtime_aggregates"][],
	/** fetch aggregated fields from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates_aggregate:ModelTypes["diem_in_circulation_realtime_aggregates_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" using primary key columns */
	diem_in_circulation_realtime_aggregates_by_pk?:ModelTypes["diem_in_circulation_realtime_aggregates"],
	/** fetch data from the table: "gas_payments" */
	gas_payments:ModelTypes["gas_payments"][],
	/** fetch aggregated fields from the table: "gas_payments" */
	gas_payments_aggregate:ModelTypes["gas_payments_aggregate"],
	/** fetch data from the table: "gas_payments" using primary key columns */
	gas_payments_by_pk?:ModelTypes["gas_payments"],
	/** fetch data from the table: "preburn_events" */
	preburn_events:ModelTypes["preburn_events"][],
	/** fetch aggregated fields from the table: "preburn_events" */
	preburn_events_aggregate:ModelTypes["preburn_events_aggregate"],
	/** fetch data from the table: "preburn_events" using primary key columns */
	preburn_events_by_pk?:ModelTypes["preburn_events"],
	/** fetch data from the table: "receivedmint_events" */
	receivedmint_events:ModelTypes["receivedmint_events"][],
	/** fetch aggregated fields from the table: "receivedmint_events" */
	receivedmint_events_aggregate:ModelTypes["receivedmint_events_aggregate"],
	/** fetch data from the table: "receivedmint_events" using primary key columns */
	receivedmint_events_by_pk?:ModelTypes["receivedmint_events"],
	/** fetch data from the table: "sentpayment_events" */
	sentpayment_events:ModelTypes["sentpayment_events"][],
	/** fetch aggregated fields from the table: "sentpayment_events" */
	sentpayment_events_aggregate:ModelTypes["sentpayment_events_aggregate"],
	/** fetch data from the table: "sentpayment_events" using primary key columns */
	sentpayment_events_by_pk?:ModelTypes["sentpayment_events"],
	/** fetch data from the table: "transactions" */
	transactions:ModelTypes["transactions"][],
	/** fetch aggregated fields from the table: "transactions" */
	transactions_aggregate:ModelTypes["transactions_aggregate"],
	/** fetch data from the table: "transactions" using primary key columns */
	transactions_by_pk?:ModelTypes["transactions"]
};
	/** columns and relationships of "receivedmint_events" */
["receivedmint_events"]: {
		amount:ModelTypes["bigint"],
	commit_timestamp:ModelTypes["timestamptz"],
	currency:ModelTypes["bpchar"],
	key:string,
	receiver:ModelTypes["bpchar"],
	sequence_number:ModelTypes["bigint"],
	status:number,
	transaction_version:ModelTypes["bigint"]
};
	/** aggregated selection of "receivedmint_events" */
["receivedmint_events_aggregate"]: {
		aggregate?:ModelTypes["receivedmint_events_aggregate_fields"],
	nodes:ModelTypes["receivedmint_events"][]
};
	/** aggregate fields of "receivedmint_events" */
["receivedmint_events_aggregate_fields"]: {
		avg?:ModelTypes["receivedmint_events_avg_fields"],
	count:number,
	max?:ModelTypes["receivedmint_events_max_fields"],
	min?:ModelTypes["receivedmint_events_min_fields"],
	stddev?:ModelTypes["receivedmint_events_stddev_fields"],
	stddev_pop?:ModelTypes["receivedmint_events_stddev_pop_fields"],
	stddev_samp?:ModelTypes["receivedmint_events_stddev_samp_fields"],
	sum?:ModelTypes["receivedmint_events_sum_fields"],
	var_pop?:ModelTypes["receivedmint_events_var_pop_fields"],
	var_samp?:ModelTypes["receivedmint_events_var_samp_fields"],
	variance?:ModelTypes["receivedmint_events_variance_fields"]
};
	/** aggregate avg on columns */
["receivedmint_events_avg_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** Boolean expression to filter rows from the table "receivedmint_events". All fields are combined with a logical 'AND'. */
["receivedmint_events_bool_exp"]: GraphQLTypes["receivedmint_events_bool_exp"];
	/** unique or primary key constraints on table "receivedmint_events" */
["receivedmint_events_constraint"]: GraphQLTypes["receivedmint_events_constraint"];
	/** input type for incrementing numeric columns in table "receivedmint_events" */
["receivedmint_events_inc_input"]: GraphQLTypes["receivedmint_events_inc_input"];
	/** input type for inserting data into table "receivedmint_events" */
["receivedmint_events_insert_input"]: GraphQLTypes["receivedmint_events_insert_input"];
	/** aggregate max on columns */
["receivedmint_events_max_fields"]: {
		amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	receiver?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["receivedmint_events_min_fields"]: {
		amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	receiver?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "receivedmint_events" */
["receivedmint_events_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["receivedmint_events"][]
};
	/** on conflict condition type for table "receivedmint_events" */
["receivedmint_events_on_conflict"]: GraphQLTypes["receivedmint_events_on_conflict"];
	/** Ordering options when selecting data from "receivedmint_events". */
["receivedmint_events_order_by"]: GraphQLTypes["receivedmint_events_order_by"];
	/** primary key columns input for table: receivedmint_events */
["receivedmint_events_pk_columns_input"]: GraphQLTypes["receivedmint_events_pk_columns_input"];
	/** select columns of table "receivedmint_events" */
["receivedmint_events_select_column"]: GraphQLTypes["receivedmint_events_select_column"];
	/** input type for updating data in table "receivedmint_events" */
["receivedmint_events_set_input"]: GraphQLTypes["receivedmint_events_set_input"];
	/** aggregate stddev on columns */
["receivedmint_events_stddev_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_pop on columns */
["receivedmint_events_stddev_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_samp on columns */
["receivedmint_events_stddev_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate sum on columns */
["receivedmint_events_sum_fields"]: {
		amount?:ModelTypes["bigint"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** update columns of table "receivedmint_events" */
["receivedmint_events_update_column"]: GraphQLTypes["receivedmint_events_update_column"];
	/** aggregate var_pop on columns */
["receivedmint_events_var_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate var_samp on columns */
["receivedmint_events_var_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate variance on columns */
["receivedmint_events_variance_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** columns and relationships of "sentpayment_events" */
["sentpayment_events"]: {
		amount:ModelTypes["bigint"],
	commit_timestamp:ModelTypes["timestamptz"],
	currency:ModelTypes["bpchar"],
	key:string,
	metadata:string,
	receiver:ModelTypes["bpchar"],
	sender:ModelTypes["bpchar"],
	sequence_number:ModelTypes["bigint"],
	status?:number,
	transaction_version:ModelTypes["bigint"]
};
	/** aggregated selection of "sentpayment_events" */
["sentpayment_events_aggregate"]: {
		aggregate?:ModelTypes["sentpayment_events_aggregate_fields"],
	nodes:ModelTypes["sentpayment_events"][]
};
	/** aggregate fields of "sentpayment_events" */
["sentpayment_events_aggregate_fields"]: {
		avg?:ModelTypes["sentpayment_events_avg_fields"],
	count:number,
	max?:ModelTypes["sentpayment_events_max_fields"],
	min?:ModelTypes["sentpayment_events_min_fields"],
	stddev?:ModelTypes["sentpayment_events_stddev_fields"],
	stddev_pop?:ModelTypes["sentpayment_events_stddev_pop_fields"],
	stddev_samp?:ModelTypes["sentpayment_events_stddev_samp_fields"],
	sum?:ModelTypes["sentpayment_events_sum_fields"],
	var_pop?:ModelTypes["sentpayment_events_var_pop_fields"],
	var_samp?:ModelTypes["sentpayment_events_var_samp_fields"],
	variance?:ModelTypes["sentpayment_events_variance_fields"]
};
	/** aggregate avg on columns */
["sentpayment_events_avg_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** Boolean expression to filter rows from the table "sentpayment_events". All fields are combined with a logical 'AND'. */
["sentpayment_events_bool_exp"]: GraphQLTypes["sentpayment_events_bool_exp"];
	/** unique or primary key constraints on table "sentpayment_events" */
["sentpayment_events_constraint"]: GraphQLTypes["sentpayment_events_constraint"];
	/** input type for incrementing numeric columns in table "sentpayment_events" */
["sentpayment_events_inc_input"]: GraphQLTypes["sentpayment_events_inc_input"];
	/** input type for inserting data into table "sentpayment_events" */
["sentpayment_events_insert_input"]: GraphQLTypes["sentpayment_events_insert_input"];
	/** aggregate max on columns */
["sentpayment_events_max_fields"]: {
		amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	metadata?:string,
	receiver?:ModelTypes["bpchar"],
	sender?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["sentpayment_events_min_fields"]: {
		amount?:ModelTypes["bigint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	currency?:ModelTypes["bpchar"],
	key?:string,
	metadata?:string,
	receiver?:ModelTypes["bpchar"],
	sender?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "sentpayment_events" */
["sentpayment_events_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["sentpayment_events"][]
};
	/** on conflict condition type for table "sentpayment_events" */
["sentpayment_events_on_conflict"]: GraphQLTypes["sentpayment_events_on_conflict"];
	/** Ordering options when selecting data from "sentpayment_events". */
["sentpayment_events_order_by"]: GraphQLTypes["sentpayment_events_order_by"];
	/** primary key columns input for table: sentpayment_events */
["sentpayment_events_pk_columns_input"]: GraphQLTypes["sentpayment_events_pk_columns_input"];
	/** select columns of table "sentpayment_events" */
["sentpayment_events_select_column"]: GraphQLTypes["sentpayment_events_select_column"];
	/** input type for updating data in table "sentpayment_events" */
["sentpayment_events_set_input"]: GraphQLTypes["sentpayment_events_set_input"];
	/** aggregate stddev on columns */
["sentpayment_events_stddev_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_pop on columns */
["sentpayment_events_stddev_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate stddev_samp on columns */
["sentpayment_events_stddev_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate sum on columns */
["sentpayment_events_sum_fields"]: {
		amount?:ModelTypes["bigint"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	transaction_version?:ModelTypes["bigint"]
};
	/** update columns of table "sentpayment_events" */
["sentpayment_events_update_column"]: GraphQLTypes["sentpayment_events_update_column"];
	/** aggregate var_pop on columns */
["sentpayment_events_var_pop_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate var_samp on columns */
["sentpayment_events_var_samp_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	/** aggregate variance on columns */
["sentpayment_events_variance_fields"]: {
		amount?:number,
	sequence_number?:number,
	status?:number,
	transaction_version?:number
};
	["smallint"]:any;
	/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
["smallint_comparison_exp"]: GraphQLTypes["smallint_comparison_exp"];
	["subscription_root"]: {
		/** fetch data from the table: "accounts" */
	accounts:ModelTypes["accounts"][],
	/** fetch aggregated fields from the table: "accounts" */
	accounts_aggregate:ModelTypes["accounts_aggregate"],
	/** fetch data from the table: "accounts_balances" */
	accounts_balances:ModelTypes["accounts_balances"][],
	/** fetch aggregated fields from the table: "accounts_balances" */
	accounts_balances_aggregate:ModelTypes["accounts_balances_aggregate"],
	/** fetch data from the table: "accounts_balances" using primary key columns */
	accounts_balances_by_pk?:ModelTypes["accounts_balances"],
	/** fetch data from the table: "accounts" using primary key columns */
	accounts_by_pk?:ModelTypes["accounts"],
	/** fetch data from the table: "burn_events" */
	burn_events:ModelTypes["burn_events"][],
	/** fetch aggregated fields from the table: "burn_events" */
	burn_events_aggregate:ModelTypes["burn_events_aggregate"],
	/** fetch data from the table: "burn_events" using primary key columns */
	burn_events_by_pk?:ModelTypes["burn_events"],
	/** fetch data from the table: "burns" */
	burns:ModelTypes["burns"][],
	/** fetch aggregated fields from the table: "burns" */
	burns_aggregate:ModelTypes["burns_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates:ModelTypes["diem_in_circulation_realtime_aggregates"][],
	/** fetch aggregated fields from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates_aggregate:ModelTypes["diem_in_circulation_realtime_aggregates_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" using primary key columns */
	diem_in_circulation_realtime_aggregates_by_pk?:ModelTypes["diem_in_circulation_realtime_aggregates"],
	/** fetch data from the table: "gas_payments" */
	gas_payments:ModelTypes["gas_payments"][],
	/** fetch aggregated fields from the table: "gas_payments" */
	gas_payments_aggregate:ModelTypes["gas_payments_aggregate"],
	/** fetch data from the table: "gas_payments" using primary key columns */
	gas_payments_by_pk?:ModelTypes["gas_payments"],
	/** fetch data from the table: "preburn_events" */
	preburn_events:ModelTypes["preburn_events"][],
	/** fetch aggregated fields from the table: "preburn_events" */
	preburn_events_aggregate:ModelTypes["preburn_events_aggregate"],
	/** fetch data from the table: "preburn_events" using primary key columns */
	preburn_events_by_pk?:ModelTypes["preburn_events"],
	/** fetch data from the table: "receivedmint_events" */
	receivedmint_events:ModelTypes["receivedmint_events"][],
	/** fetch aggregated fields from the table: "receivedmint_events" */
	receivedmint_events_aggregate:ModelTypes["receivedmint_events_aggregate"],
	/** fetch data from the table: "receivedmint_events" using primary key columns */
	receivedmint_events_by_pk?:ModelTypes["receivedmint_events"],
	/** fetch data from the table: "sentpayment_events" */
	sentpayment_events:ModelTypes["sentpayment_events"][],
	/** fetch aggregated fields from the table: "sentpayment_events" */
	sentpayment_events_aggregate:ModelTypes["sentpayment_events_aggregate"],
	/** fetch data from the table: "sentpayment_events" using primary key columns */
	sentpayment_events_by_pk?:ModelTypes["sentpayment_events"],
	/** fetch data from the table: "transactions" */
	transactions:ModelTypes["transactions"][],
	/** fetch aggregated fields from the table: "transactions" */
	transactions_aggregate:ModelTypes["transactions_aggregate"],
	/** fetch data from the table: "transactions" using primary key columns */
	transactions_by_pk?:ModelTypes["transactions"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	/** columns and relationships of "transactions" */
["transactions"]: {
		chain_id?:ModelTypes["smallint"],
	commit_timestamp:ModelTypes["timestamptz"],
	expiration_timestamp?:ModelTypes["timestamptz"],
	gas_currency?:ModelTypes["bpchar"],
	gas_unit_price?:ModelTypes["bigint"],
	gas_used:ModelTypes["bigint"],
	max_gas_amount?:ModelTypes["bigint"],
	public_key?:string,
	sender?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status:number,
	txn_type:number,
	version:ModelTypes["bigint"]
};
	/** aggregated selection of "transactions" */
["transactions_aggregate"]: {
		aggregate?:ModelTypes["transactions_aggregate_fields"],
	nodes:ModelTypes["transactions"][]
};
	/** aggregate fields of "transactions" */
["transactions_aggregate_fields"]: {
		avg?:ModelTypes["transactions_avg_fields"],
	count:number,
	max?:ModelTypes["transactions_max_fields"],
	min?:ModelTypes["transactions_min_fields"],
	stddev?:ModelTypes["transactions_stddev_fields"],
	stddev_pop?:ModelTypes["transactions_stddev_pop_fields"],
	stddev_samp?:ModelTypes["transactions_stddev_samp_fields"],
	sum?:ModelTypes["transactions_sum_fields"],
	var_pop?:ModelTypes["transactions_var_pop_fields"],
	var_samp?:ModelTypes["transactions_var_samp_fields"],
	variance?:ModelTypes["transactions_variance_fields"]
};
	/** aggregate avg on columns */
["transactions_avg_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
["transactions_bool_exp"]: GraphQLTypes["transactions_bool_exp"];
	/** unique or primary key constraints on table "transactions" */
["transactions_constraint"]: GraphQLTypes["transactions_constraint"];
	/** input type for incrementing numeric columns in table "transactions" */
["transactions_inc_input"]: GraphQLTypes["transactions_inc_input"];
	/** input type for inserting data into table "transactions" */
["transactions_insert_input"]: GraphQLTypes["transactions_insert_input"];
	/** aggregate max on columns */
["transactions_max_fields"]: {
		chain_id?:ModelTypes["smallint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	expiration_timestamp?:ModelTypes["timestamptz"],
	gas_currency?:ModelTypes["bpchar"],
	gas_unit_price?:ModelTypes["bigint"],
	gas_used?:ModelTypes["bigint"],
	max_gas_amount?:ModelTypes["bigint"],
	public_key?:string,
	sender?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	txn_type?:number,
	version?:ModelTypes["bigint"]
};
	/** aggregate min on columns */
["transactions_min_fields"]: {
		chain_id?:ModelTypes["smallint"],
	commit_timestamp?:ModelTypes["timestamptz"],
	expiration_timestamp?:ModelTypes["timestamptz"],
	gas_currency?:ModelTypes["bpchar"],
	gas_unit_price?:ModelTypes["bigint"],
	gas_used?:ModelTypes["bigint"],
	max_gas_amount?:ModelTypes["bigint"],
	public_key?:string,
	sender?:ModelTypes["bpchar"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	txn_type?:number,
	version?:ModelTypes["bigint"]
};
	/** response of any mutation on the table "transactions" */
["transactions_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["transactions"][]
};
	/** on conflict condition type for table "transactions" */
["transactions_on_conflict"]: GraphQLTypes["transactions_on_conflict"];
	/** Ordering options when selecting data from "transactions". */
["transactions_order_by"]: GraphQLTypes["transactions_order_by"];
	/** primary key columns input for table: transactions */
["transactions_pk_columns_input"]: GraphQLTypes["transactions_pk_columns_input"];
	/** select columns of table "transactions" */
["transactions_select_column"]: GraphQLTypes["transactions_select_column"];
	/** input type for updating data in table "transactions" */
["transactions_set_input"]: GraphQLTypes["transactions_set_input"];
	/** aggregate stddev on columns */
["transactions_stddev_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** aggregate stddev_pop on columns */
["transactions_stddev_pop_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** aggregate stddev_samp on columns */
["transactions_stddev_samp_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** aggregate sum on columns */
["transactions_sum_fields"]: {
		chain_id?:ModelTypes["smallint"],
	gas_unit_price?:ModelTypes["bigint"],
	gas_used?:ModelTypes["bigint"],
	max_gas_amount?:ModelTypes["bigint"],
	sequence_number?:ModelTypes["bigint"],
	status?:number,
	txn_type?:number,
	version?:ModelTypes["bigint"]
};
	/** update columns of table "transactions" */
["transactions_update_column"]: GraphQLTypes["transactions_update_column"];
	/** aggregate var_pop on columns */
["transactions_var_pop_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** aggregate var_samp on columns */
["transactions_var_samp_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
};
	/** aggregate variance on columns */
["transactions_variance_fields"]: {
		chain_id?:number,
	gas_unit_price?:number,
	gas_used?:number,
	max_gas_amount?:number,
	sequence_number?:number,
	status?:number,
	txn_type?:number,
	version?:number
}
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
		_eq?: boolean,
	_gt?: boolean,
	_gte?: boolean,
	_in?: Array<boolean>,
	_is_null?: boolean,
	_lt?: boolean,
	_lte?: boolean,
	_neq?: boolean,
	_nin?: Array<boolean>
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
		_eq?: number,
	_gt?: number,
	_gte?: number,
	_in?: Array<number>,
	_is_null?: boolean,
	_lt?: number,
	_lte?: number,
	_neq?: number,
	_nin?: Array<number>
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string,
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string,
	/** does the column NOT match the given pattern */
	_nlike?: string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string,
	/** does the column match the given SQL regular expression */
	_similar?: string
};
	/** columns and relationships of "accounts" */
["accounts"]: {
	__typename: "accounts",
	address: GraphQLTypes["bpchar"],
	authentication_key: string,
	base_url?: string,
	base_url_rotation_events_key?: string,
	compliance_key?: string,
	compliance_key_rotation_events_key?: string,
	create_account_event_stream_sequence_number: GraphQLTypes["bigint"],
	delegated_key_rotation_capability: boolean,
	delegated_withdrawal_capability: boolean,
	diem_id_domain_events_key?: string,
	expiration_time?: GraphQLTypes["timestamptz"],
	human_name?: string,
	indexed_at: GraphQLTypes["timestamptz"],
	is_frozen: boolean,
	parent_vasp_address?: GraphQLTypes["bpchar"],
	received_events_key: string,
	received_mint_events_key?: string,
	role: number,
	sent_events_key: string,
	transaction_version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "accounts" */
["accounts_aggregate"]: {
	__typename: "accounts_aggregate",
	aggregate?: GraphQLTypes["accounts_aggregate_fields"],
	nodes: Array<GraphQLTypes["accounts"]>
};
	/** aggregate fields of "accounts" */
["accounts_aggregate_fields"]: {
	__typename: "accounts_aggregate_fields",
	avg?: GraphQLTypes["accounts_avg_fields"],
	count: number,
	max?: GraphQLTypes["accounts_max_fields"],
	min?: GraphQLTypes["accounts_min_fields"],
	stddev?: GraphQLTypes["accounts_stddev_fields"],
	stddev_pop?: GraphQLTypes["accounts_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["accounts_stddev_samp_fields"],
	sum?: GraphQLTypes["accounts_sum_fields"],
	var_pop?: GraphQLTypes["accounts_var_pop_fields"],
	var_samp?: GraphQLTypes["accounts_var_samp_fields"],
	variance?: GraphQLTypes["accounts_variance_fields"]
};
	/** aggregate avg on columns */
["accounts_avg_fields"]: {
	__typename: "accounts_avg_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** columns and relationships of "accounts_balances" */
["accounts_balances"]: {
	__typename: "accounts_balances",
	address: GraphQLTypes["bpchar"],
	balance: GraphQLTypes["bigint"],
	currency: GraphQLTypes["bpchar"],
	timestamp: GraphQLTypes["timestamptz"],
	version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "accounts_balances" */
["accounts_balances_aggregate"]: {
	__typename: "accounts_balances_aggregate",
	aggregate?: GraphQLTypes["accounts_balances_aggregate_fields"],
	nodes: Array<GraphQLTypes["accounts_balances"]>
};
	/** aggregate fields of "accounts_balances" */
["accounts_balances_aggregate_fields"]: {
	__typename: "accounts_balances_aggregate_fields",
	avg?: GraphQLTypes["accounts_balances_avg_fields"],
	count: number,
	max?: GraphQLTypes["accounts_balances_max_fields"],
	min?: GraphQLTypes["accounts_balances_min_fields"],
	stddev?: GraphQLTypes["accounts_balances_stddev_fields"],
	stddev_pop?: GraphQLTypes["accounts_balances_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["accounts_balances_stddev_samp_fields"],
	sum?: GraphQLTypes["accounts_balances_sum_fields"],
	var_pop?: GraphQLTypes["accounts_balances_var_pop_fields"],
	var_samp?: GraphQLTypes["accounts_balances_var_samp_fields"],
	variance?: GraphQLTypes["accounts_balances_variance_fields"]
};
	/** aggregate avg on columns */
["accounts_balances_avg_fields"]: {
	__typename: "accounts_balances_avg_fields",
	balance?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "accounts_balances". All fields are combined with a logical 'AND'. */
["accounts_balances_bool_exp"]: {
		_and?: Array<GraphQLTypes["accounts_balances_bool_exp"]>,
	_not?: GraphQLTypes["accounts_balances_bool_exp"],
	_or?: Array<GraphQLTypes["accounts_balances_bool_exp"]>,
	address?: GraphQLTypes["bpchar_comparison_exp"],
	balance?: GraphQLTypes["bigint_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "accounts_balances" */
["accounts_balances_constraint"]: accounts_balances_constraint;
	/** input type for incrementing numeric columns in table "accounts_balances" */
["accounts_balances_inc_input"]: {
		balance?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "accounts_balances" */
["accounts_balances_insert_input"]: {
		address?: GraphQLTypes["bpchar"],
	balance?: GraphQLTypes["bigint"],
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["accounts_balances_max_fields"]: {
	__typename: "accounts_balances_max_fields",
	address?: GraphQLTypes["bpchar"],
	balance?: GraphQLTypes["bigint"],
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["accounts_balances_min_fields"]: {
	__typename: "accounts_balances_min_fields",
	address?: GraphQLTypes["bpchar"],
	balance?: GraphQLTypes["bigint"],
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "accounts_balances" */
["accounts_balances_mutation_response"]: {
	__typename: "accounts_balances_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["accounts_balances"]>
};
	/** on conflict condition type for table "accounts_balances" */
["accounts_balances_on_conflict"]: {
		constraint: GraphQLTypes["accounts_balances_constraint"],
	update_columns: Array<GraphQLTypes["accounts_balances_update_column"]>,
	where?: GraphQLTypes["accounts_balances_bool_exp"]
};
	/** Ordering options when selecting data from "accounts_balances". */
["accounts_balances_order_by"]: {
		address?: GraphQLTypes["order_by"],
	balance?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	timestamp?: GraphQLTypes["order_by"],
	version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: accounts_balances */
["accounts_balances_pk_columns_input"]: {
		address: GraphQLTypes["bpchar"],
	currency: GraphQLTypes["bpchar"],
	version: GraphQLTypes["bigint"]
};
	/** select columns of table "accounts_balances" */
["accounts_balances_select_column"]: accounts_balances_select_column;
	/** input type for updating data in table "accounts_balances" */
["accounts_balances_set_input"]: {
		address?: GraphQLTypes["bpchar"],
	balance?: GraphQLTypes["bigint"],
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["accounts_balances_stddev_fields"]: {
	__typename: "accounts_balances_stddev_fields",
	balance?: number,
	version?: number
};
	/** aggregate stddev_pop on columns */
["accounts_balances_stddev_pop_fields"]: {
	__typename: "accounts_balances_stddev_pop_fields",
	balance?: number,
	version?: number
};
	/** aggregate stddev_samp on columns */
["accounts_balances_stddev_samp_fields"]: {
	__typename: "accounts_balances_stddev_samp_fields",
	balance?: number,
	version?: number
};
	/** aggregate sum on columns */
["accounts_balances_sum_fields"]: {
	__typename: "accounts_balances_sum_fields",
	balance?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** update columns of table "accounts_balances" */
["accounts_balances_update_column"]: accounts_balances_update_column;
	/** aggregate var_pop on columns */
["accounts_balances_var_pop_fields"]: {
	__typename: "accounts_balances_var_pop_fields",
	balance?: number,
	version?: number
};
	/** aggregate var_samp on columns */
["accounts_balances_var_samp_fields"]: {
	__typename: "accounts_balances_var_samp_fields",
	balance?: number,
	version?: number
};
	/** aggregate variance on columns */
["accounts_balances_variance_fields"]: {
	__typename: "accounts_balances_variance_fields",
	balance?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
["accounts_bool_exp"]: {
		_and?: Array<GraphQLTypes["accounts_bool_exp"]>,
	_not?: GraphQLTypes["accounts_bool_exp"],
	_or?: Array<GraphQLTypes["accounts_bool_exp"]>,
	address?: GraphQLTypes["bpchar_comparison_exp"],
	authentication_key?: GraphQLTypes["String_comparison_exp"],
	base_url?: GraphQLTypes["String_comparison_exp"],
	base_url_rotation_events_key?: GraphQLTypes["String_comparison_exp"],
	compliance_key?: GraphQLTypes["String_comparison_exp"],
	compliance_key_rotation_events_key?: GraphQLTypes["String_comparison_exp"],
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	delegated_key_rotation_capability?: GraphQLTypes["Boolean_comparison_exp"],
	delegated_withdrawal_capability?: GraphQLTypes["Boolean_comparison_exp"],
	diem_id_domain_events_key?: GraphQLTypes["String_comparison_exp"],
	expiration_time?: GraphQLTypes["timestamptz_comparison_exp"],
	human_name?: GraphQLTypes["String_comparison_exp"],
	indexed_at?: GraphQLTypes["timestamptz_comparison_exp"],
	is_frozen?: GraphQLTypes["Boolean_comparison_exp"],
	parent_vasp_address?: GraphQLTypes["bpchar_comparison_exp"],
	received_events_key?: GraphQLTypes["String_comparison_exp"],
	received_mint_events_key?: GraphQLTypes["String_comparison_exp"],
	role?: GraphQLTypes["Int_comparison_exp"],
	sent_events_key?: GraphQLTypes["String_comparison_exp"],
	transaction_version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "accounts" */
["accounts_constraint"]: accounts_constraint;
	/** input type for incrementing numeric columns in table "accounts" */
["accounts_inc_input"]: {
		create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	role?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "accounts" */
["accounts_insert_input"]: {
		address?: GraphQLTypes["bpchar"],
	authentication_key?: string,
	base_url?: string,
	base_url_rotation_events_key?: string,
	compliance_key?: string,
	compliance_key_rotation_events_key?: string,
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	delegated_key_rotation_capability?: boolean,
	delegated_withdrawal_capability?: boolean,
	diem_id_domain_events_key?: string,
	expiration_time?: GraphQLTypes["timestamptz"],
	human_name?: string,
	indexed_at?: GraphQLTypes["timestamptz"],
	is_frozen?: boolean,
	parent_vasp_address?: GraphQLTypes["bpchar"],
	received_events_key?: string,
	received_mint_events_key?: string,
	role?: number,
	sent_events_key?: string,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["accounts_max_fields"]: {
	__typename: "accounts_max_fields",
	address?: GraphQLTypes["bpchar"],
	authentication_key?: string,
	base_url?: string,
	base_url_rotation_events_key?: string,
	compliance_key?: string,
	compliance_key_rotation_events_key?: string,
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	diem_id_domain_events_key?: string,
	expiration_time?: GraphQLTypes["timestamptz"],
	human_name?: string,
	indexed_at?: GraphQLTypes["timestamptz"],
	parent_vasp_address?: GraphQLTypes["bpchar"],
	received_events_key?: string,
	received_mint_events_key?: string,
	role?: number,
	sent_events_key?: string,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["accounts_min_fields"]: {
	__typename: "accounts_min_fields",
	address?: GraphQLTypes["bpchar"],
	authentication_key?: string,
	base_url?: string,
	base_url_rotation_events_key?: string,
	compliance_key?: string,
	compliance_key_rotation_events_key?: string,
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	diem_id_domain_events_key?: string,
	expiration_time?: GraphQLTypes["timestamptz"],
	human_name?: string,
	indexed_at?: GraphQLTypes["timestamptz"],
	parent_vasp_address?: GraphQLTypes["bpchar"],
	received_events_key?: string,
	received_mint_events_key?: string,
	role?: number,
	sent_events_key?: string,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "accounts" */
["accounts_mutation_response"]: {
	__typename: "accounts_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["accounts"]>
};
	/** on conflict condition type for table "accounts" */
["accounts_on_conflict"]: {
		constraint: GraphQLTypes["accounts_constraint"],
	update_columns: Array<GraphQLTypes["accounts_update_column"]>,
	where?: GraphQLTypes["accounts_bool_exp"]
};
	/** Ordering options when selecting data from "accounts". */
["accounts_order_by"]: {
		address?: GraphQLTypes["order_by"],
	authentication_key?: GraphQLTypes["order_by"],
	base_url?: GraphQLTypes["order_by"],
	base_url_rotation_events_key?: GraphQLTypes["order_by"],
	compliance_key?: GraphQLTypes["order_by"],
	compliance_key_rotation_events_key?: GraphQLTypes["order_by"],
	create_account_event_stream_sequence_number?: GraphQLTypes["order_by"],
	delegated_key_rotation_capability?: GraphQLTypes["order_by"],
	delegated_withdrawal_capability?: GraphQLTypes["order_by"],
	diem_id_domain_events_key?: GraphQLTypes["order_by"],
	expiration_time?: GraphQLTypes["order_by"],
	human_name?: GraphQLTypes["order_by"],
	indexed_at?: GraphQLTypes["order_by"],
	is_frozen?: GraphQLTypes["order_by"],
	parent_vasp_address?: GraphQLTypes["order_by"],
	received_events_key?: GraphQLTypes["order_by"],
	received_mint_events_key?: GraphQLTypes["order_by"],
	role?: GraphQLTypes["order_by"],
	sent_events_key?: GraphQLTypes["order_by"],
	transaction_version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: accounts */
["accounts_pk_columns_input"]: {
		address: GraphQLTypes["bpchar"]
};
	/** select columns of table "accounts" */
["accounts_select_column"]: accounts_select_column;
	/** input type for updating data in table "accounts" */
["accounts_set_input"]: {
		address?: GraphQLTypes["bpchar"],
	authentication_key?: string,
	base_url?: string,
	base_url_rotation_events_key?: string,
	compliance_key?: string,
	compliance_key_rotation_events_key?: string,
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	delegated_key_rotation_capability?: boolean,
	delegated_withdrawal_capability?: boolean,
	diem_id_domain_events_key?: string,
	expiration_time?: GraphQLTypes["timestamptz"],
	human_name?: string,
	indexed_at?: GraphQLTypes["timestamptz"],
	is_frozen?: boolean,
	parent_vasp_address?: GraphQLTypes["bpchar"],
	received_events_key?: string,
	received_mint_events_key?: string,
	role?: number,
	sent_events_key?: string,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["accounts_stddev_fields"]: {
	__typename: "accounts_stddev_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** aggregate stddev_pop on columns */
["accounts_stddev_pop_fields"]: {
	__typename: "accounts_stddev_pop_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** aggregate stddev_samp on columns */
["accounts_stddev_samp_fields"]: {
	__typename: "accounts_stddev_samp_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** aggregate sum on columns */
["accounts_sum_fields"]: {
	__typename: "accounts_sum_fields",
	create_account_event_stream_sequence_number?: GraphQLTypes["bigint"],
	role?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** update columns of table "accounts" */
["accounts_update_column"]: accounts_update_column;
	/** aggregate var_pop on columns */
["accounts_var_pop_fields"]: {
	__typename: "accounts_var_pop_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** aggregate var_samp on columns */
["accounts_var_samp_fields"]: {
	__typename: "accounts_var_samp_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	/** aggregate variance on columns */
["accounts_variance_fields"]: {
	__typename: "accounts_variance_fields",
	create_account_event_stream_sequence_number?: number,
	role?: number,
	transaction_version?: number
};
	["bigint"]:any;
	/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: {
		_eq?: GraphQLTypes["bigint"],
	_gt?: GraphQLTypes["bigint"],
	_gte?: GraphQLTypes["bigint"],
	_in?: Array<GraphQLTypes["bigint"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["bigint"],
	_lte?: GraphQLTypes["bigint"],
	_neq?: GraphQLTypes["bigint"],
	_nin?: Array<GraphQLTypes["bigint"]>
};
	["bpchar"]:any;
	/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
["bpchar_comparison_exp"]: {
		_eq?: GraphQLTypes["bpchar"],
	_gt?: GraphQLTypes["bpchar"],
	_gte?: GraphQLTypes["bpchar"],
	/** does the column match the given case-insensitive pattern */
	_ilike?: GraphQLTypes["bpchar"],
	_in?: Array<GraphQLTypes["bpchar"]>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: GraphQLTypes["bpchar"],
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: GraphQLTypes["bpchar"],
	_lt?: GraphQLTypes["bpchar"],
	_lte?: GraphQLTypes["bpchar"],
	_neq?: GraphQLTypes["bpchar"],
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: GraphQLTypes["bpchar"],
	_nin?: Array<GraphQLTypes["bpchar"]>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: GraphQLTypes["bpchar"],
	/** does the column NOT match the given pattern */
	_nlike?: GraphQLTypes["bpchar"],
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: GraphQLTypes["bpchar"],
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: GraphQLTypes["bpchar"],
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: GraphQLTypes["bpchar"],
	/** does the column match the given SQL regular expression */
	_similar?: GraphQLTypes["bpchar"]
};
	/** columns and relationships of "burn_events" */
["burn_events"]: {
	__typename: "burn_events",
	address: GraphQLTypes["bpchar"],
	amount: GraphQLTypes["bigint"],
	commit_timestamp: GraphQLTypes["timestamptz"],
	currency: GraphQLTypes["bpchar"],
	key: string,
	sequence_number: GraphQLTypes["bigint"],
	status: number,
	transaction_version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "burn_events" */
["burn_events_aggregate"]: {
	__typename: "burn_events_aggregate",
	aggregate?: GraphQLTypes["burn_events_aggregate_fields"],
	nodes: Array<GraphQLTypes["burn_events"]>
};
	/** aggregate fields of "burn_events" */
["burn_events_aggregate_fields"]: {
	__typename: "burn_events_aggregate_fields",
	avg?: GraphQLTypes["burn_events_avg_fields"],
	count: number,
	max?: GraphQLTypes["burn_events_max_fields"],
	min?: GraphQLTypes["burn_events_min_fields"],
	stddev?: GraphQLTypes["burn_events_stddev_fields"],
	stddev_pop?: GraphQLTypes["burn_events_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["burn_events_stddev_samp_fields"],
	sum?: GraphQLTypes["burn_events_sum_fields"],
	var_pop?: GraphQLTypes["burn_events_var_pop_fields"],
	var_samp?: GraphQLTypes["burn_events_var_samp_fields"],
	variance?: GraphQLTypes["burn_events_variance_fields"]
};
	/** aggregate avg on columns */
["burn_events_avg_fields"]: {
	__typename: "burn_events_avg_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** Boolean expression to filter rows from the table "burn_events". All fields are combined with a logical 'AND'. */
["burn_events_bool_exp"]: {
		_and?: Array<GraphQLTypes["burn_events_bool_exp"]>,
	_not?: GraphQLTypes["burn_events_bool_exp"],
	_or?: Array<GraphQLTypes["burn_events_bool_exp"]>,
	address?: GraphQLTypes["bpchar_comparison_exp"],
	amount?: GraphQLTypes["bigint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	key?: GraphQLTypes["String_comparison_exp"],
	sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	transaction_version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "burn_events" */
["burn_events_constraint"]: burn_events_constraint;
	/** input type for incrementing numeric columns in table "burn_events" */
["burn_events_inc_input"]: {
		amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "burn_events" */
["burn_events_insert_input"]: {
		address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["burn_events_max_fields"]: {
	__typename: "burn_events_max_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["burn_events_min_fields"]: {
	__typename: "burn_events_min_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "burn_events" */
["burn_events_mutation_response"]: {
	__typename: "burn_events_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["burn_events"]>
};
	/** on conflict condition type for table "burn_events" */
["burn_events_on_conflict"]: {
		constraint: GraphQLTypes["burn_events_constraint"],
	update_columns: Array<GraphQLTypes["burn_events_update_column"]>,
	where?: GraphQLTypes["burn_events_bool_exp"]
};
	/** Ordering options when selecting data from "burn_events". */
["burn_events_order_by"]: {
		address?: GraphQLTypes["order_by"],
	amount?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	key?: GraphQLTypes["order_by"],
	sequence_number?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	transaction_version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: burn_events */
["burn_events_pk_columns_input"]: {
		key: string,
	sequence_number: GraphQLTypes["bigint"]
};
	/** select columns of table "burn_events" */
["burn_events_select_column"]: burn_events_select_column;
	/** input type for updating data in table "burn_events" */
["burn_events_set_input"]: {
		address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["burn_events_stddev_fields"]: {
	__typename: "burn_events_stddev_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_pop on columns */
["burn_events_stddev_pop_fields"]: {
	__typename: "burn_events_stddev_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_samp on columns */
["burn_events_stddev_samp_fields"]: {
	__typename: "burn_events_stddev_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate sum on columns */
["burn_events_sum_fields"]: {
	__typename: "burn_events_sum_fields",
	amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** update columns of table "burn_events" */
["burn_events_update_column"]: burn_events_update_column;
	/** aggregate var_pop on columns */
["burn_events_var_pop_fields"]: {
	__typename: "burn_events_var_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate var_samp on columns */
["burn_events_var_samp_fields"]: {
	__typename: "burn_events_var_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate variance on columns */
["burn_events_variance_fields"]: {
	__typename: "burn_events_variance_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** columns and relationships of "burns" */
["burns"]: {
	__typename: "burns",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	status?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "burns" */
["burns_aggregate"]: {
	__typename: "burns_aggregate",
	aggregate?: GraphQLTypes["burns_aggregate_fields"],
	nodes: Array<GraphQLTypes["burns"]>
};
	/** aggregate fields of "burns" */
["burns_aggregate_fields"]: {
	__typename: "burns_aggregate_fields",
	avg?: GraphQLTypes["burns_avg_fields"],
	count: number,
	max?: GraphQLTypes["burns_max_fields"],
	min?: GraphQLTypes["burns_min_fields"],
	stddev?: GraphQLTypes["burns_stddev_fields"],
	stddev_pop?: GraphQLTypes["burns_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["burns_stddev_samp_fields"],
	sum?: GraphQLTypes["burns_sum_fields"],
	var_pop?: GraphQLTypes["burns_var_pop_fields"],
	var_samp?: GraphQLTypes["burns_var_samp_fields"],
	variance?: GraphQLTypes["burns_variance_fields"]
};
	/** aggregate avg on columns */
["burns_avg_fields"]: {
	__typename: "burns_avg_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "burns". All fields are combined with a logical 'AND'. */
["burns_bool_exp"]: {
		_and?: Array<GraphQLTypes["burns_bool_exp"]>,
	_not?: GraphQLTypes["burns_bool_exp"],
	_or?: Array<GraphQLTypes["burns_bool_exp"]>,
	address?: GraphQLTypes["bpchar_comparison_exp"],
	amount?: GraphQLTypes["bigint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["burns_max_fields"]: {
	__typename: "burns_max_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	status?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["burns_min_fields"]: {
	__typename: "burns_min_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	status?: number,
	version?: GraphQLTypes["bigint"]
};
	/** Ordering options when selecting data from "burns". */
["burns_order_by"]: {
		address?: GraphQLTypes["order_by"],
	amount?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	version?: GraphQLTypes["order_by"]
};
	/** select columns of table "burns" */
["burns_select_column"]: burns_select_column;
	/** aggregate stddev on columns */
["burns_stddev_fields"]: {
	__typename: "burns_stddev_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** aggregate stddev_pop on columns */
["burns_stddev_pop_fields"]: {
	__typename: "burns_stddev_pop_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** aggregate stddev_samp on columns */
["burns_stddev_samp_fields"]: {
	__typename: "burns_stddev_samp_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** aggregate sum on columns */
["burns_sum_fields"]: {
	__typename: "burns_sum_fields",
	amount?: GraphQLTypes["bigint"],
	status?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregate var_pop on columns */
["burns_var_pop_fields"]: {
	__typename: "burns_var_pop_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** aggregate var_samp on columns */
["burns_var_samp_fields"]: {
	__typename: "burns_var_samp_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** aggregate variance on columns */
["burns_variance_fields"]: {
	__typename: "burns_variance_fields",
	amount?: number,
	status?: number,
	version?: number
};
	/** columns and relationships of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates"]: {
	__typename: "diem_in_circulation_realtime_aggregates",
	currency: GraphQLTypes["bpchar"],
	timestamp: GraphQLTypes["timestamptz"],
	total_burn_value: GraphQLTypes["bigint"],
	total_mint_value: GraphQLTypes["bigint"],
	total_net_value: GraphQLTypes["bigint"],
	version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate"]: {
	__typename: "diem_in_circulation_realtime_aggregates_aggregate",
	aggregate?: GraphQLTypes["diem_in_circulation_realtime_aggregates_aggregate_fields"],
	nodes: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates"]>
};
	/** aggregate fields of "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_aggregate_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_aggregate_fields",
	avg?: GraphQLTypes["diem_in_circulation_realtime_aggregates_avg_fields"],
	count: number,
	max?: GraphQLTypes["diem_in_circulation_realtime_aggregates_max_fields"],
	min?: GraphQLTypes["diem_in_circulation_realtime_aggregates_min_fields"],
	stddev?: GraphQLTypes["diem_in_circulation_realtime_aggregates_stddev_fields"],
	stddev_pop?: GraphQLTypes["diem_in_circulation_realtime_aggregates_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["diem_in_circulation_realtime_aggregates_stddev_samp_fields"],
	sum?: GraphQLTypes["diem_in_circulation_realtime_aggregates_sum_fields"],
	var_pop?: GraphQLTypes["diem_in_circulation_realtime_aggregates_var_pop_fields"],
	var_samp?: GraphQLTypes["diem_in_circulation_realtime_aggregates_var_samp_fields"],
	variance?: GraphQLTypes["diem_in_circulation_realtime_aggregates_variance_fields"]
};
	/** aggregate avg on columns */
["diem_in_circulation_realtime_aggregates_avg_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_avg_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "diem_in_circulation_realtime_aggregates". All fields are combined with a logical 'AND'. */
["diem_in_circulation_realtime_aggregates_bool_exp"]: {
		_and?: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates_bool_exp"]>,
	_not?: GraphQLTypes["diem_in_circulation_realtime_aggregates_bool_exp"],
	_or?: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates_bool_exp"]>,
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	total_burn_value?: GraphQLTypes["bigint_comparison_exp"],
	total_mint_value?: GraphQLTypes["bigint_comparison_exp"],
	total_net_value?: GraphQLTypes["bigint_comparison_exp"],
	version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_constraint"]: diem_in_circulation_realtime_aggregates_constraint;
	/** input type for incrementing numeric columns in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_inc_input"]: {
		total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_insert_input"]: {
		currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["diem_in_circulation_realtime_aggregates_max_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_max_fields",
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["diem_in_circulation_realtime_aggregates_min_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_min_fields",
	currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_mutation_response"]: {
	__typename: "diem_in_circulation_realtime_aggregates_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates"]>
};
	/** on conflict condition type for table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_on_conflict"]: {
		constraint: GraphQLTypes["diem_in_circulation_realtime_aggregates_constraint"],
	update_columns: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates_update_column"]>,
	where?: GraphQLTypes["diem_in_circulation_realtime_aggregates_bool_exp"]
};
	/** Ordering options when selecting data from "diem_in_circulation_realtime_aggregates". */
["diem_in_circulation_realtime_aggregates_order_by"]: {
		currency?: GraphQLTypes["order_by"],
	timestamp?: GraphQLTypes["order_by"],
	total_burn_value?: GraphQLTypes["order_by"],
	total_mint_value?: GraphQLTypes["order_by"],
	total_net_value?: GraphQLTypes["order_by"],
	version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: diem_in_circulation_realtime_aggregates */
["diem_in_circulation_realtime_aggregates_pk_columns_input"]: {
		currency: GraphQLTypes["bpchar"],
	version: GraphQLTypes["bigint"]
};
	/** select columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_select_column"]: diem_in_circulation_realtime_aggregates_select_column;
	/** input type for updating data in table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_set_input"]: {
		currency?: GraphQLTypes["bpchar"],
	timestamp?: GraphQLTypes["timestamptz"],
	total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["diem_in_circulation_realtime_aggregates_stddev_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_stddev_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** aggregate stddev_pop on columns */
["diem_in_circulation_realtime_aggregates_stddev_pop_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_stddev_pop_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** aggregate stddev_samp on columns */
["diem_in_circulation_realtime_aggregates_stddev_samp_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_stddev_samp_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** aggregate sum on columns */
["diem_in_circulation_realtime_aggregates_sum_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_sum_fields",
	total_burn_value?: GraphQLTypes["bigint"],
	total_mint_value?: GraphQLTypes["bigint"],
	total_net_value?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** update columns of table "diem_in_circulation_realtime_aggregates" */
["diem_in_circulation_realtime_aggregates_update_column"]: diem_in_circulation_realtime_aggregates_update_column;
	/** aggregate var_pop on columns */
["diem_in_circulation_realtime_aggregates_var_pop_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_var_pop_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** aggregate var_samp on columns */
["diem_in_circulation_realtime_aggregates_var_samp_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_var_samp_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** aggregate variance on columns */
["diem_in_circulation_realtime_aggregates_variance_fields"]: {
	__typename: "diem_in_circulation_realtime_aggregates_variance_fields",
	total_burn_value?: number,
	total_mint_value?: number,
	total_net_value?: number,
	version?: number
};
	/** columns and relationships of "gas_payments" */
["gas_payments"]: {
	__typename: "gas_payments",
	commit_timestamp: GraphQLTypes["timestamptz"],
	currency: GraphQLTypes["bpchar"],
	gas_paid: GraphQLTypes["bigint"],
	receiver: GraphQLTypes["bpchar"],
	sender: GraphQLTypes["bpchar"],
	version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "gas_payments" */
["gas_payments_aggregate"]: {
	__typename: "gas_payments_aggregate",
	aggregate?: GraphQLTypes["gas_payments_aggregate_fields"],
	nodes: Array<GraphQLTypes["gas_payments"]>
};
	/** aggregate fields of "gas_payments" */
["gas_payments_aggregate_fields"]: {
	__typename: "gas_payments_aggregate_fields",
	avg?: GraphQLTypes["gas_payments_avg_fields"],
	count: number,
	max?: GraphQLTypes["gas_payments_max_fields"],
	min?: GraphQLTypes["gas_payments_min_fields"],
	stddev?: GraphQLTypes["gas_payments_stddev_fields"],
	stddev_pop?: GraphQLTypes["gas_payments_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["gas_payments_stddev_samp_fields"],
	sum?: GraphQLTypes["gas_payments_sum_fields"],
	var_pop?: GraphQLTypes["gas_payments_var_pop_fields"],
	var_samp?: GraphQLTypes["gas_payments_var_samp_fields"],
	variance?: GraphQLTypes["gas_payments_variance_fields"]
};
	/** aggregate avg on columns */
["gas_payments_avg_fields"]: {
	__typename: "gas_payments_avg_fields",
	gas_paid?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "gas_payments". All fields are combined with a logical 'AND'. */
["gas_payments_bool_exp"]: {
		_and?: Array<GraphQLTypes["gas_payments_bool_exp"]>,
	_not?: GraphQLTypes["gas_payments_bool_exp"],
	_or?: Array<GraphQLTypes["gas_payments_bool_exp"]>,
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	gas_paid?: GraphQLTypes["bigint_comparison_exp"],
	receiver?: GraphQLTypes["bpchar_comparison_exp"],
	sender?: GraphQLTypes["bpchar_comparison_exp"],
	version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "gas_payments" */
["gas_payments_constraint"]: gas_payments_constraint;
	/** input type for incrementing numeric columns in table "gas_payments" */
["gas_payments_inc_input"]: {
		gas_paid?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "gas_payments" */
["gas_payments_insert_input"]: {
		commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	gas_paid?: GraphQLTypes["bigint"],
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["gas_payments_max_fields"]: {
	__typename: "gas_payments_max_fields",
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	gas_paid?: GraphQLTypes["bigint"],
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["gas_payments_min_fields"]: {
	__typename: "gas_payments_min_fields",
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	gas_paid?: GraphQLTypes["bigint"],
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "gas_payments" */
["gas_payments_mutation_response"]: {
	__typename: "gas_payments_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["gas_payments"]>
};
	/** on conflict condition type for table "gas_payments" */
["gas_payments_on_conflict"]: {
		constraint: GraphQLTypes["gas_payments_constraint"],
	update_columns: Array<GraphQLTypes["gas_payments_update_column"]>,
	where?: GraphQLTypes["gas_payments_bool_exp"]
};
	/** Ordering options when selecting data from "gas_payments". */
["gas_payments_order_by"]: {
		commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	gas_paid?: GraphQLTypes["order_by"],
	receiver?: GraphQLTypes["order_by"],
	sender?: GraphQLTypes["order_by"],
	version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: gas_payments */
["gas_payments_pk_columns_input"]: {
		version: GraphQLTypes["bigint"]
};
	/** select columns of table "gas_payments" */
["gas_payments_select_column"]: gas_payments_select_column;
	/** input type for updating data in table "gas_payments" */
["gas_payments_set_input"]: {
		commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	gas_paid?: GraphQLTypes["bigint"],
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["gas_payments_stddev_fields"]: {
	__typename: "gas_payments_stddev_fields",
	gas_paid?: number,
	version?: number
};
	/** aggregate stddev_pop on columns */
["gas_payments_stddev_pop_fields"]: {
	__typename: "gas_payments_stddev_pop_fields",
	gas_paid?: number,
	version?: number
};
	/** aggregate stddev_samp on columns */
["gas_payments_stddev_samp_fields"]: {
	__typename: "gas_payments_stddev_samp_fields",
	gas_paid?: number,
	version?: number
};
	/** aggregate sum on columns */
["gas_payments_sum_fields"]: {
	__typename: "gas_payments_sum_fields",
	gas_paid?: GraphQLTypes["bigint"],
	version?: GraphQLTypes["bigint"]
};
	/** update columns of table "gas_payments" */
["gas_payments_update_column"]: gas_payments_update_column;
	/** aggregate var_pop on columns */
["gas_payments_var_pop_fields"]: {
	__typename: "gas_payments_var_pop_fields",
	gas_paid?: number,
	version?: number
};
	/** aggregate var_samp on columns */
["gas_payments_var_samp_fields"]: {
	__typename: "gas_payments_var_samp_fields",
	gas_paid?: number,
	version?: number
};
	/** aggregate variance on columns */
["gas_payments_variance_fields"]: {
	__typename: "gas_payments_variance_fields",
	gas_paid?: number,
	version?: number
};
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "accounts" */
	delete_accounts?: GraphQLTypes["accounts_mutation_response"],
	/** delete data from the table: "accounts_balances" */
	delete_accounts_balances?: GraphQLTypes["accounts_balances_mutation_response"],
	/** delete single row from the table: "accounts_balances" */
	delete_accounts_balances_by_pk?: GraphQLTypes["accounts_balances"],
	/** delete single row from the table: "accounts" */
	delete_accounts_by_pk?: GraphQLTypes["accounts"],
	/** delete data from the table: "burn_events" */
	delete_burn_events?: GraphQLTypes["burn_events_mutation_response"],
	/** delete single row from the table: "burn_events" */
	delete_burn_events_by_pk?: GraphQLTypes["burn_events"],
	/** delete data from the table: "diem_in_circulation_realtime_aggregates" */
	delete_diem_in_circulation_realtime_aggregates?: GraphQLTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** delete single row from the table: "diem_in_circulation_realtime_aggregates" */
	delete_diem_in_circulation_realtime_aggregates_by_pk?: GraphQLTypes["diem_in_circulation_realtime_aggregates"],
	/** delete data from the table: "gas_payments" */
	delete_gas_payments?: GraphQLTypes["gas_payments_mutation_response"],
	/** delete single row from the table: "gas_payments" */
	delete_gas_payments_by_pk?: GraphQLTypes["gas_payments"],
	/** delete data from the table: "preburn_events" */
	delete_preburn_events?: GraphQLTypes["preburn_events_mutation_response"],
	/** delete single row from the table: "preburn_events" */
	delete_preburn_events_by_pk?: GraphQLTypes["preburn_events"],
	/** delete data from the table: "receivedmint_events" */
	delete_receivedmint_events?: GraphQLTypes["receivedmint_events_mutation_response"],
	/** delete single row from the table: "receivedmint_events" */
	delete_receivedmint_events_by_pk?: GraphQLTypes["receivedmint_events"],
	/** delete data from the table: "sentpayment_events" */
	delete_sentpayment_events?: GraphQLTypes["sentpayment_events_mutation_response"],
	/** delete single row from the table: "sentpayment_events" */
	delete_sentpayment_events_by_pk?: GraphQLTypes["sentpayment_events"],
	/** delete data from the table: "transactions" */
	delete_transactions?: GraphQLTypes["transactions_mutation_response"],
	/** delete single row from the table: "transactions" */
	delete_transactions_by_pk?: GraphQLTypes["transactions"],
	/** insert data into the table: "accounts" */
	insert_accounts?: GraphQLTypes["accounts_mutation_response"],
	/** insert data into the table: "accounts_balances" */
	insert_accounts_balances?: GraphQLTypes["accounts_balances_mutation_response"],
	/** insert a single row into the table: "accounts_balances" */
	insert_accounts_balances_one?: GraphQLTypes["accounts_balances"],
	/** insert a single row into the table: "accounts" */
	insert_accounts_one?: GraphQLTypes["accounts"],
	/** insert data into the table: "burn_events" */
	insert_burn_events?: GraphQLTypes["burn_events_mutation_response"],
	/** insert a single row into the table: "burn_events" */
	insert_burn_events_one?: GraphQLTypes["burn_events"],
	/** insert data into the table: "diem_in_circulation_realtime_aggregates" */
	insert_diem_in_circulation_realtime_aggregates?: GraphQLTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** insert a single row into the table: "diem_in_circulation_realtime_aggregates" */
	insert_diem_in_circulation_realtime_aggregates_one?: GraphQLTypes["diem_in_circulation_realtime_aggregates"],
	/** insert data into the table: "gas_payments" */
	insert_gas_payments?: GraphQLTypes["gas_payments_mutation_response"],
	/** insert a single row into the table: "gas_payments" */
	insert_gas_payments_one?: GraphQLTypes["gas_payments"],
	/** insert data into the table: "preburn_events" */
	insert_preburn_events?: GraphQLTypes["preburn_events_mutation_response"],
	/** insert a single row into the table: "preburn_events" */
	insert_preburn_events_one?: GraphQLTypes["preburn_events"],
	/** insert data into the table: "receivedmint_events" */
	insert_receivedmint_events?: GraphQLTypes["receivedmint_events_mutation_response"],
	/** insert a single row into the table: "receivedmint_events" */
	insert_receivedmint_events_one?: GraphQLTypes["receivedmint_events"],
	/** insert data into the table: "sentpayment_events" */
	insert_sentpayment_events?: GraphQLTypes["sentpayment_events_mutation_response"],
	/** insert a single row into the table: "sentpayment_events" */
	insert_sentpayment_events_one?: GraphQLTypes["sentpayment_events"],
	/** insert data into the table: "transactions" */
	insert_transactions?: GraphQLTypes["transactions_mutation_response"],
	/** insert a single row into the table: "transactions" */
	insert_transactions_one?: GraphQLTypes["transactions"],
	/** update data of the table: "accounts" */
	update_accounts?: GraphQLTypes["accounts_mutation_response"],
	/** update data of the table: "accounts_balances" */
	update_accounts_balances?: GraphQLTypes["accounts_balances_mutation_response"],
	/** update single row of the table: "accounts_balances" */
	update_accounts_balances_by_pk?: GraphQLTypes["accounts_balances"],
	/** update single row of the table: "accounts" */
	update_accounts_by_pk?: GraphQLTypes["accounts"],
	/** update data of the table: "burn_events" */
	update_burn_events?: GraphQLTypes["burn_events_mutation_response"],
	/** update single row of the table: "burn_events" */
	update_burn_events_by_pk?: GraphQLTypes["burn_events"],
	/** update data of the table: "diem_in_circulation_realtime_aggregates" */
	update_diem_in_circulation_realtime_aggregates?: GraphQLTypes["diem_in_circulation_realtime_aggregates_mutation_response"],
	/** update single row of the table: "diem_in_circulation_realtime_aggregates" */
	update_diem_in_circulation_realtime_aggregates_by_pk?: GraphQLTypes["diem_in_circulation_realtime_aggregates"],
	/** update data of the table: "gas_payments" */
	update_gas_payments?: GraphQLTypes["gas_payments_mutation_response"],
	/** update single row of the table: "gas_payments" */
	update_gas_payments_by_pk?: GraphQLTypes["gas_payments"],
	/** update data of the table: "preburn_events" */
	update_preburn_events?: GraphQLTypes["preburn_events_mutation_response"],
	/** update single row of the table: "preburn_events" */
	update_preburn_events_by_pk?: GraphQLTypes["preburn_events"],
	/** update data of the table: "receivedmint_events" */
	update_receivedmint_events?: GraphQLTypes["receivedmint_events_mutation_response"],
	/** update single row of the table: "receivedmint_events" */
	update_receivedmint_events_by_pk?: GraphQLTypes["receivedmint_events"],
	/** update data of the table: "sentpayment_events" */
	update_sentpayment_events?: GraphQLTypes["sentpayment_events_mutation_response"],
	/** update single row of the table: "sentpayment_events" */
	update_sentpayment_events_by_pk?: GraphQLTypes["sentpayment_events"],
	/** update data of the table: "transactions" */
	update_transactions?: GraphQLTypes["transactions_mutation_response"],
	/** update single row of the table: "transactions" */
	update_transactions_by_pk?: GraphQLTypes["transactions"]
};
	/** column ordering options */
["order_by"]: order_by;
	/** columns and relationships of "preburn_events" */
["preburn_events"]: {
	__typename: "preburn_events",
	address: GraphQLTypes["bpchar"],
	amount: GraphQLTypes["bigint"],
	commit_timestamp: GraphQLTypes["timestamptz"],
	currency: GraphQLTypes["bpchar"],
	key: string,
	sequence_number: GraphQLTypes["bigint"],
	status: number,
	transaction_version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "preburn_events" */
["preburn_events_aggregate"]: {
	__typename: "preburn_events_aggregate",
	aggregate?: GraphQLTypes["preburn_events_aggregate_fields"],
	nodes: Array<GraphQLTypes["preburn_events"]>
};
	/** aggregate fields of "preburn_events" */
["preburn_events_aggregate_fields"]: {
	__typename: "preburn_events_aggregate_fields",
	avg?: GraphQLTypes["preburn_events_avg_fields"],
	count: number,
	max?: GraphQLTypes["preburn_events_max_fields"],
	min?: GraphQLTypes["preburn_events_min_fields"],
	stddev?: GraphQLTypes["preburn_events_stddev_fields"],
	stddev_pop?: GraphQLTypes["preburn_events_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["preburn_events_stddev_samp_fields"],
	sum?: GraphQLTypes["preburn_events_sum_fields"],
	var_pop?: GraphQLTypes["preburn_events_var_pop_fields"],
	var_samp?: GraphQLTypes["preburn_events_var_samp_fields"],
	variance?: GraphQLTypes["preburn_events_variance_fields"]
};
	/** aggregate avg on columns */
["preburn_events_avg_fields"]: {
	__typename: "preburn_events_avg_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** Boolean expression to filter rows from the table "preburn_events". All fields are combined with a logical 'AND'. */
["preburn_events_bool_exp"]: {
		_and?: Array<GraphQLTypes["preburn_events_bool_exp"]>,
	_not?: GraphQLTypes["preburn_events_bool_exp"],
	_or?: Array<GraphQLTypes["preburn_events_bool_exp"]>,
	address?: GraphQLTypes["bpchar_comparison_exp"],
	amount?: GraphQLTypes["bigint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	key?: GraphQLTypes["String_comparison_exp"],
	sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	transaction_version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "preburn_events" */
["preburn_events_constraint"]: preburn_events_constraint;
	/** input type for incrementing numeric columns in table "preburn_events" */
["preburn_events_inc_input"]: {
		amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "preburn_events" */
["preburn_events_insert_input"]: {
		address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["preburn_events_max_fields"]: {
	__typename: "preburn_events_max_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["preburn_events_min_fields"]: {
	__typename: "preburn_events_min_fields",
	address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "preburn_events" */
["preburn_events_mutation_response"]: {
	__typename: "preburn_events_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["preburn_events"]>
};
	/** on conflict condition type for table "preburn_events" */
["preburn_events_on_conflict"]: {
		constraint: GraphQLTypes["preburn_events_constraint"],
	update_columns: Array<GraphQLTypes["preburn_events_update_column"]>,
	where?: GraphQLTypes["preburn_events_bool_exp"]
};
	/** Ordering options when selecting data from "preburn_events". */
["preburn_events_order_by"]: {
		address?: GraphQLTypes["order_by"],
	amount?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	key?: GraphQLTypes["order_by"],
	sequence_number?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	transaction_version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: preburn_events */
["preburn_events_pk_columns_input"]: {
		key: string,
	sequence_number: GraphQLTypes["bigint"]
};
	/** select columns of table "preburn_events" */
["preburn_events_select_column"]: preburn_events_select_column;
	/** input type for updating data in table "preburn_events" */
["preburn_events_set_input"]: {
		address?: GraphQLTypes["bpchar"],
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["preburn_events_stddev_fields"]: {
	__typename: "preburn_events_stddev_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_pop on columns */
["preburn_events_stddev_pop_fields"]: {
	__typename: "preburn_events_stddev_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_samp on columns */
["preburn_events_stddev_samp_fields"]: {
	__typename: "preburn_events_stddev_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate sum on columns */
["preburn_events_sum_fields"]: {
	__typename: "preburn_events_sum_fields",
	amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** update columns of table "preburn_events" */
["preburn_events_update_column"]: preburn_events_update_column;
	/** aggregate var_pop on columns */
["preburn_events_var_pop_fields"]: {
	__typename: "preburn_events_var_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate var_samp on columns */
["preburn_events_var_samp_fields"]: {
	__typename: "preburn_events_var_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate variance on columns */
["preburn_events_variance_fields"]: {
	__typename: "preburn_events_variance_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "accounts" */
	accounts: Array<GraphQLTypes["accounts"]>,
	/** fetch aggregated fields from the table: "accounts" */
	accounts_aggregate: GraphQLTypes["accounts_aggregate"],
	/** fetch data from the table: "accounts_balances" */
	accounts_balances: Array<GraphQLTypes["accounts_balances"]>,
	/** fetch aggregated fields from the table: "accounts_balances" */
	accounts_balances_aggregate: GraphQLTypes["accounts_balances_aggregate"],
	/** fetch data from the table: "accounts_balances" using primary key columns */
	accounts_balances_by_pk?: GraphQLTypes["accounts_balances"],
	/** fetch data from the table: "accounts" using primary key columns */
	accounts_by_pk?: GraphQLTypes["accounts"],
	/** fetch data from the table: "burn_events" */
	burn_events: Array<GraphQLTypes["burn_events"]>,
	/** fetch aggregated fields from the table: "burn_events" */
	burn_events_aggregate: GraphQLTypes["burn_events_aggregate"],
	/** fetch data from the table: "burn_events" using primary key columns */
	burn_events_by_pk?: GraphQLTypes["burn_events"],
	/** fetch data from the table: "burns" */
	burns: Array<GraphQLTypes["burns"]>,
	/** fetch aggregated fields from the table: "burns" */
	burns_aggregate: GraphQLTypes["burns_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates"]>,
	/** fetch aggregated fields from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates_aggregate: GraphQLTypes["diem_in_circulation_realtime_aggregates_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" using primary key columns */
	diem_in_circulation_realtime_aggregates_by_pk?: GraphQLTypes["diem_in_circulation_realtime_aggregates"],
	/** fetch data from the table: "gas_payments" */
	gas_payments: Array<GraphQLTypes["gas_payments"]>,
	/** fetch aggregated fields from the table: "gas_payments" */
	gas_payments_aggregate: GraphQLTypes["gas_payments_aggregate"],
	/** fetch data from the table: "gas_payments" using primary key columns */
	gas_payments_by_pk?: GraphQLTypes["gas_payments"],
	/** fetch data from the table: "preburn_events" */
	preburn_events: Array<GraphQLTypes["preburn_events"]>,
	/** fetch aggregated fields from the table: "preburn_events" */
	preburn_events_aggregate: GraphQLTypes["preburn_events_aggregate"],
	/** fetch data from the table: "preburn_events" using primary key columns */
	preburn_events_by_pk?: GraphQLTypes["preburn_events"],
	/** fetch data from the table: "receivedmint_events" */
	receivedmint_events: Array<GraphQLTypes["receivedmint_events"]>,
	/** fetch aggregated fields from the table: "receivedmint_events" */
	receivedmint_events_aggregate: GraphQLTypes["receivedmint_events_aggregate"],
	/** fetch data from the table: "receivedmint_events" using primary key columns */
	receivedmint_events_by_pk?: GraphQLTypes["receivedmint_events"],
	/** fetch data from the table: "sentpayment_events" */
	sentpayment_events: Array<GraphQLTypes["sentpayment_events"]>,
	/** fetch aggregated fields from the table: "sentpayment_events" */
	sentpayment_events_aggregate: GraphQLTypes["sentpayment_events_aggregate"],
	/** fetch data from the table: "sentpayment_events" using primary key columns */
	sentpayment_events_by_pk?: GraphQLTypes["sentpayment_events"],
	/** fetch data from the table: "transactions" */
	transactions: Array<GraphQLTypes["transactions"]>,
	/** fetch aggregated fields from the table: "transactions" */
	transactions_aggregate: GraphQLTypes["transactions_aggregate"],
	/** fetch data from the table: "transactions" using primary key columns */
	transactions_by_pk?: GraphQLTypes["transactions"]
};
	/** columns and relationships of "receivedmint_events" */
["receivedmint_events"]: {
	__typename: "receivedmint_events",
	amount: GraphQLTypes["bigint"],
	commit_timestamp: GraphQLTypes["timestamptz"],
	currency: GraphQLTypes["bpchar"],
	key: string,
	receiver: GraphQLTypes["bpchar"],
	sequence_number: GraphQLTypes["bigint"],
	status: number,
	transaction_version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "receivedmint_events" */
["receivedmint_events_aggregate"]: {
	__typename: "receivedmint_events_aggregate",
	aggregate?: GraphQLTypes["receivedmint_events_aggregate_fields"],
	nodes: Array<GraphQLTypes["receivedmint_events"]>
};
	/** aggregate fields of "receivedmint_events" */
["receivedmint_events_aggregate_fields"]: {
	__typename: "receivedmint_events_aggregate_fields",
	avg?: GraphQLTypes["receivedmint_events_avg_fields"],
	count: number,
	max?: GraphQLTypes["receivedmint_events_max_fields"],
	min?: GraphQLTypes["receivedmint_events_min_fields"],
	stddev?: GraphQLTypes["receivedmint_events_stddev_fields"],
	stddev_pop?: GraphQLTypes["receivedmint_events_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["receivedmint_events_stddev_samp_fields"],
	sum?: GraphQLTypes["receivedmint_events_sum_fields"],
	var_pop?: GraphQLTypes["receivedmint_events_var_pop_fields"],
	var_samp?: GraphQLTypes["receivedmint_events_var_samp_fields"],
	variance?: GraphQLTypes["receivedmint_events_variance_fields"]
};
	/** aggregate avg on columns */
["receivedmint_events_avg_fields"]: {
	__typename: "receivedmint_events_avg_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** Boolean expression to filter rows from the table "receivedmint_events". All fields are combined with a logical 'AND'. */
["receivedmint_events_bool_exp"]: {
		_and?: Array<GraphQLTypes["receivedmint_events_bool_exp"]>,
	_not?: GraphQLTypes["receivedmint_events_bool_exp"],
	_or?: Array<GraphQLTypes["receivedmint_events_bool_exp"]>,
	amount?: GraphQLTypes["bigint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	key?: GraphQLTypes["String_comparison_exp"],
	receiver?: GraphQLTypes["bpchar_comparison_exp"],
	sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	transaction_version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "receivedmint_events" */
["receivedmint_events_constraint"]: receivedmint_events_constraint;
	/** input type for incrementing numeric columns in table "receivedmint_events" */
["receivedmint_events_inc_input"]: {
		amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "receivedmint_events" */
["receivedmint_events_insert_input"]: {
		amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	receiver?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["receivedmint_events_max_fields"]: {
	__typename: "receivedmint_events_max_fields",
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	receiver?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["receivedmint_events_min_fields"]: {
	__typename: "receivedmint_events_min_fields",
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	receiver?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "receivedmint_events" */
["receivedmint_events_mutation_response"]: {
	__typename: "receivedmint_events_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["receivedmint_events"]>
};
	/** on conflict condition type for table "receivedmint_events" */
["receivedmint_events_on_conflict"]: {
		constraint: GraphQLTypes["receivedmint_events_constraint"],
	update_columns: Array<GraphQLTypes["receivedmint_events_update_column"]>,
	where?: GraphQLTypes["receivedmint_events_bool_exp"]
};
	/** Ordering options when selecting data from "receivedmint_events". */
["receivedmint_events_order_by"]: {
		amount?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	key?: GraphQLTypes["order_by"],
	receiver?: GraphQLTypes["order_by"],
	sequence_number?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	transaction_version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: receivedmint_events */
["receivedmint_events_pk_columns_input"]: {
		key: string,
	sequence_number: GraphQLTypes["bigint"]
};
	/** select columns of table "receivedmint_events" */
["receivedmint_events_select_column"]: receivedmint_events_select_column;
	/** input type for updating data in table "receivedmint_events" */
["receivedmint_events_set_input"]: {
		amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	receiver?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["receivedmint_events_stddev_fields"]: {
	__typename: "receivedmint_events_stddev_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_pop on columns */
["receivedmint_events_stddev_pop_fields"]: {
	__typename: "receivedmint_events_stddev_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_samp on columns */
["receivedmint_events_stddev_samp_fields"]: {
	__typename: "receivedmint_events_stddev_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate sum on columns */
["receivedmint_events_sum_fields"]: {
	__typename: "receivedmint_events_sum_fields",
	amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** update columns of table "receivedmint_events" */
["receivedmint_events_update_column"]: receivedmint_events_update_column;
	/** aggregate var_pop on columns */
["receivedmint_events_var_pop_fields"]: {
	__typename: "receivedmint_events_var_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate var_samp on columns */
["receivedmint_events_var_samp_fields"]: {
	__typename: "receivedmint_events_var_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate variance on columns */
["receivedmint_events_variance_fields"]: {
	__typename: "receivedmint_events_variance_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** columns and relationships of "sentpayment_events" */
["sentpayment_events"]: {
	__typename: "sentpayment_events",
	amount: GraphQLTypes["bigint"],
	commit_timestamp: GraphQLTypes["timestamptz"],
	currency: GraphQLTypes["bpchar"],
	key: string,
	metadata: string,
	receiver: GraphQLTypes["bpchar"],
	sender: GraphQLTypes["bpchar"],
	sequence_number: GraphQLTypes["bigint"],
	status?: number,
	transaction_version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "sentpayment_events" */
["sentpayment_events_aggregate"]: {
	__typename: "sentpayment_events_aggregate",
	aggregate?: GraphQLTypes["sentpayment_events_aggregate_fields"],
	nodes: Array<GraphQLTypes["sentpayment_events"]>
};
	/** aggregate fields of "sentpayment_events" */
["sentpayment_events_aggregate_fields"]: {
	__typename: "sentpayment_events_aggregate_fields",
	avg?: GraphQLTypes["sentpayment_events_avg_fields"],
	count: number,
	max?: GraphQLTypes["sentpayment_events_max_fields"],
	min?: GraphQLTypes["sentpayment_events_min_fields"],
	stddev?: GraphQLTypes["sentpayment_events_stddev_fields"],
	stddev_pop?: GraphQLTypes["sentpayment_events_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["sentpayment_events_stddev_samp_fields"],
	sum?: GraphQLTypes["sentpayment_events_sum_fields"],
	var_pop?: GraphQLTypes["sentpayment_events_var_pop_fields"],
	var_samp?: GraphQLTypes["sentpayment_events_var_samp_fields"],
	variance?: GraphQLTypes["sentpayment_events_variance_fields"]
};
	/** aggregate avg on columns */
["sentpayment_events_avg_fields"]: {
	__typename: "sentpayment_events_avg_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** Boolean expression to filter rows from the table "sentpayment_events". All fields are combined with a logical 'AND'. */
["sentpayment_events_bool_exp"]: {
		_and?: Array<GraphQLTypes["sentpayment_events_bool_exp"]>,
	_not?: GraphQLTypes["sentpayment_events_bool_exp"],
	_or?: Array<GraphQLTypes["sentpayment_events_bool_exp"]>,
	amount?: GraphQLTypes["bigint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	currency?: GraphQLTypes["bpchar_comparison_exp"],
	key?: GraphQLTypes["String_comparison_exp"],
	metadata?: GraphQLTypes["String_comparison_exp"],
	receiver?: GraphQLTypes["bpchar_comparison_exp"],
	sender?: GraphQLTypes["bpchar_comparison_exp"],
	sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	transaction_version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "sentpayment_events" */
["sentpayment_events_constraint"]: sentpayment_events_constraint;
	/** input type for incrementing numeric columns in table "sentpayment_events" */
["sentpayment_events_inc_input"]: {
		amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "sentpayment_events" */
["sentpayment_events_insert_input"]: {
		amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	metadata?: string,
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["sentpayment_events_max_fields"]: {
	__typename: "sentpayment_events_max_fields",
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	metadata?: string,
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["sentpayment_events_min_fields"]: {
	__typename: "sentpayment_events_min_fields",
	amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	metadata?: string,
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "sentpayment_events" */
["sentpayment_events_mutation_response"]: {
	__typename: "sentpayment_events_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["sentpayment_events"]>
};
	/** on conflict condition type for table "sentpayment_events" */
["sentpayment_events_on_conflict"]: {
		constraint: GraphQLTypes["sentpayment_events_constraint"],
	update_columns: Array<GraphQLTypes["sentpayment_events_update_column"]>,
	where?: GraphQLTypes["sentpayment_events_bool_exp"]
};
	/** Ordering options when selecting data from "sentpayment_events". */
["sentpayment_events_order_by"]: {
		amount?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	currency?: GraphQLTypes["order_by"],
	key?: GraphQLTypes["order_by"],
	metadata?: GraphQLTypes["order_by"],
	receiver?: GraphQLTypes["order_by"],
	sender?: GraphQLTypes["order_by"],
	sequence_number?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	transaction_version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: sentpayment_events */
["sentpayment_events_pk_columns_input"]: {
		key: string,
	sequence_number: GraphQLTypes["bigint"]
};
	/** select columns of table "sentpayment_events" */
["sentpayment_events_select_column"]: sentpayment_events_select_column;
	/** input type for updating data in table "sentpayment_events" */
["sentpayment_events_set_input"]: {
		amount?: GraphQLTypes["bigint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	currency?: GraphQLTypes["bpchar"],
	key?: string,
	metadata?: string,
	receiver?: GraphQLTypes["bpchar"],
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["sentpayment_events_stddev_fields"]: {
	__typename: "sentpayment_events_stddev_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_pop on columns */
["sentpayment_events_stddev_pop_fields"]: {
	__typename: "sentpayment_events_stddev_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate stddev_samp on columns */
["sentpayment_events_stddev_samp_fields"]: {
	__typename: "sentpayment_events_stddev_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate sum on columns */
["sentpayment_events_sum_fields"]: {
	__typename: "sentpayment_events_sum_fields",
	amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	transaction_version?: GraphQLTypes["bigint"]
};
	/** update columns of table "sentpayment_events" */
["sentpayment_events_update_column"]: sentpayment_events_update_column;
	/** aggregate var_pop on columns */
["sentpayment_events_var_pop_fields"]: {
	__typename: "sentpayment_events_var_pop_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate var_samp on columns */
["sentpayment_events_var_samp_fields"]: {
	__typename: "sentpayment_events_var_samp_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	/** aggregate variance on columns */
["sentpayment_events_variance_fields"]: {
	__typename: "sentpayment_events_variance_fields",
	amount?: number,
	sequence_number?: number,
	status?: number,
	transaction_version?: number
};
	["smallint"]:any;
	/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
["smallint_comparison_exp"]: {
		_eq?: GraphQLTypes["smallint"],
	_gt?: GraphQLTypes["smallint"],
	_gte?: GraphQLTypes["smallint"],
	_in?: Array<GraphQLTypes["smallint"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["smallint"],
	_lte?: GraphQLTypes["smallint"],
	_neq?: GraphQLTypes["smallint"],
	_nin?: Array<GraphQLTypes["smallint"]>
};
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "accounts" */
	accounts: Array<GraphQLTypes["accounts"]>,
	/** fetch aggregated fields from the table: "accounts" */
	accounts_aggregate: GraphQLTypes["accounts_aggregate"],
	/** fetch data from the table: "accounts_balances" */
	accounts_balances: Array<GraphQLTypes["accounts_balances"]>,
	/** fetch aggregated fields from the table: "accounts_balances" */
	accounts_balances_aggregate: GraphQLTypes["accounts_balances_aggregate"],
	/** fetch data from the table: "accounts_balances" using primary key columns */
	accounts_balances_by_pk?: GraphQLTypes["accounts_balances"],
	/** fetch data from the table: "accounts" using primary key columns */
	accounts_by_pk?: GraphQLTypes["accounts"],
	/** fetch data from the table: "burn_events" */
	burn_events: Array<GraphQLTypes["burn_events"]>,
	/** fetch aggregated fields from the table: "burn_events" */
	burn_events_aggregate: GraphQLTypes["burn_events_aggregate"],
	/** fetch data from the table: "burn_events" using primary key columns */
	burn_events_by_pk?: GraphQLTypes["burn_events"],
	/** fetch data from the table: "burns" */
	burns: Array<GraphQLTypes["burns"]>,
	/** fetch aggregated fields from the table: "burns" */
	burns_aggregate: GraphQLTypes["burns_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates: Array<GraphQLTypes["diem_in_circulation_realtime_aggregates"]>,
	/** fetch aggregated fields from the table: "diem_in_circulation_realtime_aggregates" */
	diem_in_circulation_realtime_aggregates_aggregate: GraphQLTypes["diem_in_circulation_realtime_aggregates_aggregate"],
	/** fetch data from the table: "diem_in_circulation_realtime_aggregates" using primary key columns */
	diem_in_circulation_realtime_aggregates_by_pk?: GraphQLTypes["diem_in_circulation_realtime_aggregates"],
	/** fetch data from the table: "gas_payments" */
	gas_payments: Array<GraphQLTypes["gas_payments"]>,
	/** fetch aggregated fields from the table: "gas_payments" */
	gas_payments_aggregate: GraphQLTypes["gas_payments_aggregate"],
	/** fetch data from the table: "gas_payments" using primary key columns */
	gas_payments_by_pk?: GraphQLTypes["gas_payments"],
	/** fetch data from the table: "preburn_events" */
	preburn_events: Array<GraphQLTypes["preburn_events"]>,
	/** fetch aggregated fields from the table: "preburn_events" */
	preburn_events_aggregate: GraphQLTypes["preburn_events_aggregate"],
	/** fetch data from the table: "preburn_events" using primary key columns */
	preburn_events_by_pk?: GraphQLTypes["preburn_events"],
	/** fetch data from the table: "receivedmint_events" */
	receivedmint_events: Array<GraphQLTypes["receivedmint_events"]>,
	/** fetch aggregated fields from the table: "receivedmint_events" */
	receivedmint_events_aggregate: GraphQLTypes["receivedmint_events_aggregate"],
	/** fetch data from the table: "receivedmint_events" using primary key columns */
	receivedmint_events_by_pk?: GraphQLTypes["receivedmint_events"],
	/** fetch data from the table: "sentpayment_events" */
	sentpayment_events: Array<GraphQLTypes["sentpayment_events"]>,
	/** fetch aggregated fields from the table: "sentpayment_events" */
	sentpayment_events_aggregate: GraphQLTypes["sentpayment_events_aggregate"],
	/** fetch data from the table: "sentpayment_events" using primary key columns */
	sentpayment_events_by_pk?: GraphQLTypes["sentpayment_events"],
	/** fetch data from the table: "transactions" */
	transactions: Array<GraphQLTypes["transactions"]>,
	/** fetch aggregated fields from the table: "transactions" */
	transactions_aggregate: GraphQLTypes["transactions_aggregate"],
	/** fetch data from the table: "transactions" using primary key columns */
	transactions_by_pk?: GraphQLTypes["transactions"]
};
	["timestamptz"]:any;
	/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
		_eq?: GraphQLTypes["timestamptz"],
	_gt?: GraphQLTypes["timestamptz"],
	_gte?: GraphQLTypes["timestamptz"],
	_in?: Array<GraphQLTypes["timestamptz"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["timestamptz"],
	_lte?: GraphQLTypes["timestamptz"],
	_neq?: GraphQLTypes["timestamptz"],
	_nin?: Array<GraphQLTypes["timestamptz"]>
};
	/** columns and relationships of "transactions" */
["transactions"]: {
	__typename: "transactions",
	chain_id?: GraphQLTypes["smallint"],
	commit_timestamp: GraphQLTypes["timestamptz"],
	expiration_timestamp?: GraphQLTypes["timestamptz"],
	gas_currency?: GraphQLTypes["bpchar"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	public_key?: string,
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status: number,
	txn_type: number,
	version: GraphQLTypes["bigint"]
};
	/** aggregated selection of "transactions" */
["transactions_aggregate"]: {
	__typename: "transactions_aggregate",
	aggregate?: GraphQLTypes["transactions_aggregate_fields"],
	nodes: Array<GraphQLTypes["transactions"]>
};
	/** aggregate fields of "transactions" */
["transactions_aggregate_fields"]: {
	__typename: "transactions_aggregate_fields",
	avg?: GraphQLTypes["transactions_avg_fields"],
	count: number,
	max?: GraphQLTypes["transactions_max_fields"],
	min?: GraphQLTypes["transactions_min_fields"],
	stddev?: GraphQLTypes["transactions_stddev_fields"],
	stddev_pop?: GraphQLTypes["transactions_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["transactions_stddev_samp_fields"],
	sum?: GraphQLTypes["transactions_sum_fields"],
	var_pop?: GraphQLTypes["transactions_var_pop_fields"],
	var_samp?: GraphQLTypes["transactions_var_samp_fields"],
	variance?: GraphQLTypes["transactions_variance_fields"]
};
	/** aggregate avg on columns */
["transactions_avg_fields"]: {
	__typename: "transactions_avg_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
["transactions_bool_exp"]: {
		_and?: Array<GraphQLTypes["transactions_bool_exp"]>,
	_not?: GraphQLTypes["transactions_bool_exp"],
	_or?: Array<GraphQLTypes["transactions_bool_exp"]>,
	chain_id?: GraphQLTypes["smallint_comparison_exp"],
	commit_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	expiration_timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	gas_currency?: GraphQLTypes["bpchar_comparison_exp"],
	gas_unit_price?: GraphQLTypes["bigint_comparison_exp"],
	gas_used?: GraphQLTypes["bigint_comparison_exp"],
	max_gas_amount?: GraphQLTypes["bigint_comparison_exp"],
	public_key?: GraphQLTypes["String_comparison_exp"],
	sender?: GraphQLTypes["bpchar_comparison_exp"],
	sequence_number?: GraphQLTypes["bigint_comparison_exp"],
	status?: GraphQLTypes["Int_comparison_exp"],
	txn_type?: GraphQLTypes["Int_comparison_exp"],
	version?: GraphQLTypes["bigint_comparison_exp"]
};
	/** unique or primary key constraints on table "transactions" */
["transactions_constraint"]: transactions_constraint;
	/** input type for incrementing numeric columns in table "transactions" */
["transactions_inc_input"]: {
		chain_id?: GraphQLTypes["smallint"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** input type for inserting data into table "transactions" */
["transactions_insert_input"]: {
		chain_id?: GraphQLTypes["smallint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	expiration_timestamp?: GraphQLTypes["timestamptz"],
	gas_currency?: GraphQLTypes["bpchar"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	public_key?: string,
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregate max on columns */
["transactions_max_fields"]: {
	__typename: "transactions_max_fields",
	chain_id?: GraphQLTypes["smallint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	expiration_timestamp?: GraphQLTypes["timestamptz"],
	gas_currency?: GraphQLTypes["bpchar"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	public_key?: string,
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregate min on columns */
["transactions_min_fields"]: {
	__typename: "transactions_min_fields",
	chain_id?: GraphQLTypes["smallint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	expiration_timestamp?: GraphQLTypes["timestamptz"],
	gas_currency?: GraphQLTypes["bpchar"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	public_key?: string,
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** response of any mutation on the table "transactions" */
["transactions_mutation_response"]: {
	__typename: "transactions_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["transactions"]>
};
	/** on conflict condition type for table "transactions" */
["transactions_on_conflict"]: {
		constraint: GraphQLTypes["transactions_constraint"],
	update_columns: Array<GraphQLTypes["transactions_update_column"]>,
	where?: GraphQLTypes["transactions_bool_exp"]
};
	/** Ordering options when selecting data from "transactions". */
["transactions_order_by"]: {
		chain_id?: GraphQLTypes["order_by"],
	commit_timestamp?: GraphQLTypes["order_by"],
	expiration_timestamp?: GraphQLTypes["order_by"],
	gas_currency?: GraphQLTypes["order_by"],
	gas_unit_price?: GraphQLTypes["order_by"],
	gas_used?: GraphQLTypes["order_by"],
	max_gas_amount?: GraphQLTypes["order_by"],
	public_key?: GraphQLTypes["order_by"],
	sender?: GraphQLTypes["order_by"],
	sequence_number?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	txn_type?: GraphQLTypes["order_by"],
	version?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: transactions */
["transactions_pk_columns_input"]: {
		version: GraphQLTypes["bigint"]
};
	/** select columns of table "transactions" */
["transactions_select_column"]: transactions_select_column;
	/** input type for updating data in table "transactions" */
["transactions_set_input"]: {
		chain_id?: GraphQLTypes["smallint"],
	commit_timestamp?: GraphQLTypes["timestamptz"],
	expiration_timestamp?: GraphQLTypes["timestamptz"],
	gas_currency?: GraphQLTypes["bpchar"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	public_key?: string,
	sender?: GraphQLTypes["bpchar"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** aggregate stddev on columns */
["transactions_stddev_fields"]: {
	__typename: "transactions_stddev_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** aggregate stddev_pop on columns */
["transactions_stddev_pop_fields"]: {
	__typename: "transactions_stddev_pop_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** aggregate stddev_samp on columns */
["transactions_stddev_samp_fields"]: {
	__typename: "transactions_stddev_samp_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** aggregate sum on columns */
["transactions_sum_fields"]: {
	__typename: "transactions_sum_fields",
	chain_id?: GraphQLTypes["smallint"],
	gas_unit_price?: GraphQLTypes["bigint"],
	gas_used?: GraphQLTypes["bigint"],
	max_gas_amount?: GraphQLTypes["bigint"],
	sequence_number?: GraphQLTypes["bigint"],
	status?: number,
	txn_type?: number,
	version?: GraphQLTypes["bigint"]
};
	/** update columns of table "transactions" */
["transactions_update_column"]: transactions_update_column;
	/** aggregate var_pop on columns */
["transactions_var_pop_fields"]: {
	__typename: "transactions_var_pop_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** aggregate var_samp on columns */
["transactions_var_samp_fields"]: {
	__typename: "transactions_var_samp_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
};
	/** aggregate variance on columns */
["transactions_variance_fields"]: {
	__typename: "transactions_variance_fields",
	chain_id?: number,
	gas_unit_price?: number,
	gas_used?: number,
	max_gas_amount?: number,
	sequence_number?: number,
	status?: number,
	txn_type?: number,
	version?: number
}
    }
/** unique or primary key constraints on table "accounts_balances" */
export const enum accounts_balances_constraint {
	accounts_balances_pkey = "accounts_balances_pkey"
}
/** select columns of table "accounts_balances" */
export const enum accounts_balances_select_column {
	address = "address",
	balance = "balance",
	currency = "currency",
	timestamp = "timestamp",
	version = "version"
}
/** update columns of table "accounts_balances" */
export const enum accounts_balances_update_column {
	address = "address",
	balance = "balance",
	currency = "currency",
	timestamp = "timestamp",
	version = "version"
}
/** unique or primary key constraints on table "accounts" */
export const enum accounts_constraint {
	accounts_pkey = "accounts_pkey"
}
/** select columns of table "accounts" */
export const enum accounts_select_column {
	address = "address",
	authentication_key = "authentication_key",
	base_url = "base_url",
	base_url_rotation_events_key = "base_url_rotation_events_key",
	compliance_key = "compliance_key",
	compliance_key_rotation_events_key = "compliance_key_rotation_events_key",
	create_account_event_stream_sequence_number = "create_account_event_stream_sequence_number",
	delegated_key_rotation_capability = "delegated_key_rotation_capability",
	delegated_withdrawal_capability = "delegated_withdrawal_capability",
	diem_id_domain_events_key = "diem_id_domain_events_key",
	expiration_time = "expiration_time",
	human_name = "human_name",
	indexed_at = "indexed_at",
	is_frozen = "is_frozen",
	parent_vasp_address = "parent_vasp_address",
	received_events_key = "received_events_key",
	received_mint_events_key = "received_mint_events_key",
	role = "role",
	sent_events_key = "sent_events_key",
	transaction_version = "transaction_version"
}
/** update columns of table "accounts" */
export const enum accounts_update_column {
	address = "address",
	authentication_key = "authentication_key",
	base_url = "base_url",
	base_url_rotation_events_key = "base_url_rotation_events_key",
	compliance_key = "compliance_key",
	compliance_key_rotation_events_key = "compliance_key_rotation_events_key",
	create_account_event_stream_sequence_number = "create_account_event_stream_sequence_number",
	delegated_key_rotation_capability = "delegated_key_rotation_capability",
	delegated_withdrawal_capability = "delegated_withdrawal_capability",
	diem_id_domain_events_key = "diem_id_domain_events_key",
	expiration_time = "expiration_time",
	human_name = "human_name",
	indexed_at = "indexed_at",
	is_frozen = "is_frozen",
	parent_vasp_address = "parent_vasp_address",
	received_events_key = "received_events_key",
	received_mint_events_key = "received_mint_events_key",
	role = "role",
	sent_events_key = "sent_events_key",
	transaction_version = "transaction_version"
}
/** unique or primary key constraints on table "burn_events" */
export const enum burn_events_constraint {
	burn_events_pkey = "burn_events_pkey"
}
/** select columns of table "burn_events" */
export const enum burn_events_select_column {
	address = "address",
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** update columns of table "burn_events" */
export const enum burn_events_update_column {
	address = "address",
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** select columns of table "burns" */
export const enum burns_select_column {
	address = "address",
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	status = "status",
	version = "version"
}
/** unique or primary key constraints on table "diem_in_circulation_realtime_aggregates" */
export const enum diem_in_circulation_realtime_aggregates_constraint {
	diem_in_circulation_realtime_pk = "diem_in_circulation_realtime_pk"
}
/** select columns of table "diem_in_circulation_realtime_aggregates" */
export const enum diem_in_circulation_realtime_aggregates_select_column {
	currency = "currency",
	timestamp = "timestamp",
	total_burn_value = "total_burn_value",
	total_mint_value = "total_mint_value",
	total_net_value = "total_net_value",
	version = "version"
}
/** update columns of table "diem_in_circulation_realtime_aggregates" */
export const enum diem_in_circulation_realtime_aggregates_update_column {
	currency = "currency",
	timestamp = "timestamp",
	total_burn_value = "total_burn_value",
	total_mint_value = "total_mint_value",
	total_net_value = "total_net_value",
	version = "version"
}
/** unique or primary key constraints on table "gas_payments" */
export const enum gas_payments_constraint {
	gas_payments_pkey = "gas_payments_pkey"
}
/** select columns of table "gas_payments" */
export const enum gas_payments_select_column {
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	gas_paid = "gas_paid",
	receiver = "receiver",
	sender = "sender",
	version = "version"
}
/** update columns of table "gas_payments" */
export const enum gas_payments_update_column {
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	gas_paid = "gas_paid",
	receiver = "receiver",
	sender = "sender",
	version = "version"
}
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "preburn_events" */
export const enum preburn_events_constraint {
	preburn_events_pkey = "preburn_events_pkey"
}
/** select columns of table "preburn_events" */
export const enum preburn_events_select_column {
	address = "address",
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** update columns of table "preburn_events" */
export const enum preburn_events_update_column {
	address = "address",
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** unique or primary key constraints on table "receivedmint_events" */
export const enum receivedmint_events_constraint {
	receivedmint_events_pkey = "receivedmint_events_pkey"
}
/** select columns of table "receivedmint_events" */
export const enum receivedmint_events_select_column {
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	receiver = "receiver",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** update columns of table "receivedmint_events" */
export const enum receivedmint_events_update_column {
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	receiver = "receiver",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** unique or primary key constraints on table "sentpayment_events" */
export const enum sentpayment_events_constraint {
	sentpayment_events_pkey = "sentpayment_events_pkey"
}
/** select columns of table "sentpayment_events" */
export const enum sentpayment_events_select_column {
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	metadata = "metadata",
	receiver = "receiver",
	sender = "sender",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** update columns of table "sentpayment_events" */
export const enum sentpayment_events_update_column {
	amount = "amount",
	commit_timestamp = "commit_timestamp",
	currency = "currency",
	key = "key",
	metadata = "metadata",
	receiver = "receiver",
	sender = "sender",
	sequence_number = "sequence_number",
	status = "status",
	transaction_version = "transaction_version"
}
/** unique or primary key constraints on table "transactions" */
export const enum transactions_constraint {
	transactions_pkey = "transactions_pkey"
}
/** select columns of table "transactions" */
export const enum transactions_select_column {
	chain_id = "chain_id",
	commit_timestamp = "commit_timestamp",
	expiration_timestamp = "expiration_timestamp",
	gas_currency = "gas_currency",
	gas_unit_price = "gas_unit_price",
	gas_used = "gas_used",
	max_gas_amount = "max_gas_amount",
	public_key = "public_key",
	sender = "sender",
	sequence_number = "sequence_number",
	status = "status",
	txn_type = "txn_type",
	version = "version"
}
/** update columns of table "transactions" */
export const enum transactions_update_column {
	chain_id = "chain_id",
	commit_timestamp = "commit_timestamp",
	expiration_timestamp = "expiration_timestamp",
	gas_currency = "gas_currency",
	gas_unit_price = "gas_unit_price",
	gas_used = "gas_used",
	max_gas_amount = "max_gas_amount",
	public_key = "public_key",
	sender = "sender",
	sequence_number = "sequence_number",
	status = "status",
	txn_type = "txn_type",
	version = "version"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, options?: OperationOptions) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?:string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullChainConstruct(fn)(operation, key)(o as any, options)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullSubscriptionConstruct(fn)(operation, key)(o as any, options)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'query_root'),
mutation: fullChainConstructor(fn,'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'subscription_root')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'query_root'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'subscription_root')
});
export const Zeus = {
  query: (o:ValueTypes["query_root"], operationName?: string) => queryConstruct('query', 'query_root', operationName)(o),
mutation: (o:ValueTypes["mutation_root"], operationName?: string) => queryConstruct('mutation', 'mutation_root', operationName)(o),
subscription: (o:ValueTypes["subscription_root"], operationName?: string) => queryConstruct('subscription', 'subscription_root', operationName)(o)
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('http://localhost:8888/v1/graphql')