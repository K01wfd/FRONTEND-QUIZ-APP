import iconCorrect from '../assets/images/icon-correct.svg';
import iconIncorrect from '../assets/images/icon-incorrect.svg';

export function highlightActive(targetElement, outlineColor) {
  const siblingElement = targetElement.nextSibling;
  if (targetElement.checked) {
    siblingElement.style.outline = `3px solid ${outlineColor}`;
    const innerSpan = siblingElement.querySelector('span');
    innerSpan.style.backgroundColor = `${outlineColor}`;
    innerSpan.style.color = '#fff';
  }
}
function highlightAnswer(element, color, type) {
  const labelWrapper = element.nextSibling;
  labelWrapper.style.outline = `3px solid ${color}`;
  const labelInnerContent = labelWrapper.querySelector(
    '[data-label-inner-content]'
  );
  labelInnerContent.firstChild.style.color = '#fff';
  labelInnerContent.firstChild.style.backgroundColor = color;
  let icon = document.createElement('img');
  if (type === 'correct') {
    icon.src = iconCorrect;
  } else {
    icon.src = iconIncorrect;
  }
  labelWrapper.appendChild(icon);
}

export function highlightElement(element, outlineColor, type) {
  if (type === 'active') {
    highlightActive(element, outlineColor);
  } else {
    highlightAnswer(element, outlineColor, type);
  }
}
export function clearOptionStyles() {
  const activeOptions = document.querySelectorAll('#optionLabelWrapper');
  activeOptions.forEach((label) => {
    label.style.outline = 'none';
    label.querySelector('span').style.color = '#626C7F';
    label.querySelector('span').style.backgroundColor = '#F4F6FA';
    let icon = label.lastChild;
    console.log(icon.nodeName);
    if (icon.nodeName === 'IMG') icon.remove();
  });
}
