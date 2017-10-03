module ApplicationHelper

  def menus
    [
     { key: 'Home', path: '/' },
     { key: 'Inputs', path: '/inputs' },
     { key: 'Menus', path: '/menus' },
     { key: 'Comments', path: '/comments' },
     { key: 'Maps', path: '/maps'}
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
    items = []
    for i in 0..20
       items << [
         { value: "#{i + 1}", type: 'label' },
         { value: Faker::Name.first_name, type: 'label' },
         { value: Faker::Name.last_name , type: 'label' },
         { value: Faker::Internet.email, type: 'label' }
       ]
    end
    items
  end

end
