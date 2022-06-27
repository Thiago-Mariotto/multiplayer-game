function getKey(e) {
  console.log(`this key is pressed ${e.key}`);
  switch (e.key) {
    case 'ArrowUp' || 'w': return { y: -1 };
    case 'ArrowDown' || 's': return { y: 1 };
    case 'ArrowLeft' || 'a': return { x: -1 };
    case 'ArrowRight' || 'd': return { x: 1 };

    default: return 0;
  }
}

export default getKey;