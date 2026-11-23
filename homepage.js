/* Optional progressive enhancement: accessible, static example switcher. */
(() => {
  const examples = {
    invoice: {
      title: 'Invoice approvals without the email chase.',
      beforeTitle: 'The slow way',
      before: 'Someone opens an invoice, retypes the details, emails a manager, then follows up for approval.',
      afterTitle: 'The better way',
      after: 'The invoice is prepared for review, sent to the right person and tracked in one place.',
      link: 'use-cases.html?industry=finance#finance',
      linkText: 'Explore finance use cases'
    },
    quote: {
      title: 'Customer quotes without the after-hours admin.',
      beforeTitle: 'The slow way',
      before: 'A tradie takes a call, writes down details, drafts a quote at night and manually chases a response.',
      afterTitle: 'The better way',
      after: 'Job details are captured once, a draft quote is prepared for approval and follow-ups can be scheduled.',
      link: 'use-cases.html?industry=tradies#tradies',
      linkText: 'Explore trades use cases'
    },
    school: {
      title: 'School enquiries, answered more easily.',
      beforeTitle: 'The slow way',
      before: 'Office staff answer the same questions about policies, dates and forms over and over.',
      afterTitle: 'The better way',
      after: 'Families can find answers from approved school information, while staff handle sensitive or unusual requests.',
      link: 'use-cases.html?industry=schools#schools',
      linkText: 'Explore school use cases'
    },
    council: {
      title: "Resident requests that don't get lost.",
      beforeTitle: 'The slow way',
      before: 'A resident reports an issue and staff move it between emails, departments and spreadsheets.',
      afterTitle: 'The better way',
      after: 'The request is categorised, directed to the right team and tracked through to completion.',
      link: 'use-cases.html?industry=councils#councils',
      linkText: 'Explore council use cases'
    }
  };
  const buttons = [...document.querySelectorAll('.lp-example-button')];
  const fields = {
    title: document.getElementById('lp-example-title'),
    beforeTitle: document.getElementById('lp-before-title'),
    before: document.getElementById('lp-before-copy'),
    afterTitle: document.getElementById('lp-after-title'),
    after: document.getElementById('lp-after-copy'),
    link: document.getElementById('lp-example-link')
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const item = examples[button.dataset.example];
    if (!item || !fields.title) return;
    buttons.forEach(b => {b.classList.toggle('is-active', b === button);b.setAttribute('aria-pressed', String(b === button));});
    fields.title.textContent = item.title;
    fields.beforeTitle.textContent = item.beforeTitle;
    fields.before.textContent = item.before;
    fields.afterTitle.textContent = item.afterTitle;
    fields.after.textContent = item.after;
    fields.link.setAttribute('href', item.link);
    fields.link.innerHTML = '';
    fields.link.append(document.createTextNode(item.linkText + ' '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→';
    fields.link.append(arrow);
  }));
})();
