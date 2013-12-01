function DataModel() {
  this.data = [
    { name: 'Personal', expanded: true,
      items: [
        { name: 'Walk dog', completed: false },
        { name: 'Write blog post', completed: true },
        { name: 'Buy milk', completed: false },
      ]
    },
    { name: 'Work', expanded: false,
      items: [
        { name: 'Ask for holidays', completed: false }
      ]
    },
    { name: 'Books to read', expanded: false,
      items: [
        { name: 'War and peace', completed: false },
        { name: '1Q84', completed: false },
      ]
    }
  ];
}
