import { ReactChild } from "react";

export interface WizardFormProps {
    child: ReactChild,
    header: string,
    nextButtonText: string,
    backButtonText: string,
    nextButtonClick: any,
    backButtonClick: any
}