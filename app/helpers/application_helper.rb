module ApplicationHelper

  def menus
    [
     { key: 'Home', path: '/' },
     { key: 'Inputs', path: '/inputs' },
     { key: 'Table', path: '/table' }
    ]
  end

  def default_headers
    [
     { name: '#' },
     { name: 'First Name' },
     { name: 'Last Name' },
     { name: 'Username' }
    ]
  end

  def items
    [
      [
        { value: '1', type: 'label'},
        { value: 'John' , type: 'label' },
        { value: 'Titor', type: 'label' },
        { value: 'johntitor', type: 'label' }
      ],
      [
        { value: '2', type: 'label'},
        { value: 'John' , type: 'label' },
        { value: 'Doe', type: 'label' },
        { value: 'johndoe', type: 'label' }

      ]
    ]
  end

end
