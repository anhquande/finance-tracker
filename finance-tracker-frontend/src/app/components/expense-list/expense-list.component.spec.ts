import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ExpenseListComponent } from './expense-list.component';

describe('ExpenseListComponent', () => {
  let spectator: Spectator<ExpenseListComponent>;

  const createComponent = createComponentFactory({
    component: ExpenseListComponent,
    imports: [],
    providers: [], // Add your providers here
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  // Add more test cases as needed
});
