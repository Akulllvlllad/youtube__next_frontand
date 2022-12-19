import {  TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IFieldProps } from "../input/Input.interface";



type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps


export interface ITextarea extends TypeInputPropsField {}