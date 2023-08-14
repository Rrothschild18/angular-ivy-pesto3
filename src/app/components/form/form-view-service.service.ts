import { Injectable, OnDestroy, QueryList } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { FormComponent } from '../form/form.component';

export interface FormValue {
  [key: string]: any;
}

@Injectable()
export class FormViewService implements OnDestroy {
  private values$ = new BehaviorSubject<FormValue>({});

  private formRefs$ = new Subject<QueryList<FormComponent>>();

  constructor() {}

  get formValues(): BehaviorSubject<FormValue> {
    return this.values$;
  }

  get formRefs(): Observable<QueryList<FormComponent>> {
    return this.formRefs$.asObservable();
  }

  onFormChanges(emittedFormValue: { [key: string]: any }) {
    this.values$.next({ ...this.values$.getValue(), ...emittedFormValue });
  }

  setFormRefs(forms: QueryList<FormComponent>) {
    this.formRefs$.next(forms);
  }

  ngOnDestroy() {
    this.values$.unsubscribe();
    this.values$.complete();

    this.formRefs$.unsubscribe();
    this.formRefs$.complete();
  }
}
