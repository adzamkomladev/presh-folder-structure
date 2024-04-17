import { FormControl } from "@angular/forms";

export interface Review {
    userId: number;
    title: string;
    description: string;
    rating: number;
}

export interface ReviewForm {
    title: FormControl<string>;
    description: FormControl<string>;
    rating: FormControl<number>;
}