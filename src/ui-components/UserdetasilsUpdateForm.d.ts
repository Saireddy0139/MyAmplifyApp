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
export declare type UserdetasilsUpdateFormInputValues = {
    email?: string;
    username?: string;
    password?: string;
};
export declare type UserdetasilsUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserdetasilsUpdateFormOverridesProps = {
    UserdetasilsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserdetasilsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserdetasilsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userdetasils?: any;
    onSubmit?: (fields: UserdetasilsUpdateFormInputValues) => UserdetasilsUpdateFormInputValues;
    onSuccess?: (fields: UserdetasilsUpdateFormInputValues) => void;
    onError?: (fields: UserdetasilsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserdetasilsUpdateFormInputValues) => UserdetasilsUpdateFormInputValues;
    onValidate?: UserdetasilsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserdetasilsUpdateForm(props: UserdetasilsUpdateFormProps): React.ReactElement;
