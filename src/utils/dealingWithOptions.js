import iconCorrect from '../assets/images/icon-correct.svg';
import iconIncorrect from '../assets/images/icon-incorrect.svg';
export function updateOptionStyles(changeEvent, outlineColor) {
  const siblingElement = changeEvent.target.nextSibling;
  if (changeEvent.target.checked) {
    siblingElement.style.outline = `3px solid ${outlineColor}`;
    siblingElement.querySelector(
      'span'
    ).style.backgroundColor = `${outlineColor}`;
    siblingElement.querySelector('span').style.color = '#fff';
  }
}
export function clearOptionStyles() {
  const activeOptions = document.querySelectorAll('#optionLabelWrapper');
  activeOptions.forEach((label) => {
    label.style.outline = 'none';
    label.querySelector('span').style.color = '#626C7F';
    label.querySelector('span').style.backgroundColor = '#F4F6FA';
  });
}
export function updateCorrectAnswerStyles(element) {
  const labelWrapper = element.nextSibling;
  const labelInnerContent = labelWrapper.querySelector(
    '[data-label-inner-content]'
  );
  let correctIcon = document.createElement('img');
  correctIcon.src = iconCorrect;
  labelInnerContent.appendChild(correctIcon);
}
