export default function () {
  return useState('editor', function() {
    return {
      open: false,
      toggleOpen: null
    }
  });
}