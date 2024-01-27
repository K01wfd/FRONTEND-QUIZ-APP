import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';
export const subjects = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Accessibility', icon: accessibilityIcon },
];
export const iconBgClasses = [
  'htmlIconBg',
  'cssIconBg',
  'jsIconBg',
  'accessibilityIconBg',
];
export const optionsLabels = ['A', 'B', 'C', 'D'];
export function updateOptionStyles(parent, target) {
  const activeOptions = document.querySelectorAll('#optionLabelWrapper');
  activeOptions.forEach((label) => {
    label.style.outline = 'none';
    label.querySelector('span').style.color = '#626C7F';
    label.querySelector('span').style.backgroundColor = '#F4F6FA';
  });
  if (target.checked) {
    parent.style.outline = '2px solid #A729F5';
    parent.querySelector('span').style.backgroundColor = '#A729F5';
    parent.querySelector('span').style.color = '#fff';
  }
}
