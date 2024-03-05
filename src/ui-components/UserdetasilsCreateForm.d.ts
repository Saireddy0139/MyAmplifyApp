/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserdetasilsCreateFormInputValues = {
    email?: string;
    username?: string;
    password?: string;
};
export declare type UserdetasilsCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserdetasilsCreateFormOverridesProps = {
    UserdetasilsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserdetasilsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserdetasilsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserdetasilsCreateFormInputValues) => UserdetasilsCreateFormInputValues;
    onSuccess?: (fields: UserdetasilsCreateFormInputValues) => void;
    onError?: (fields: UserdetasilsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserdetasilsCreateFormInputValues) => UserdetasilsCreateFormInputValues;
    onValidate?: UserdetasilsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserdetasilsCreateForm(props: UserdetasilsCreateFormProps): React.ReactElement;
