from admin_tools.dashboard import modules, Dashboard


class CustomIndexDashboard(Dashboard):
    """
    Custom index dashboard for config.x
    """
    def init_with_context(self, context):
        self.children.append(modules.Group(
            title=u"Управление сайтом",
            display="tabs",
            children=[
                modules.AppList(
                    'Пользователи',
                    models=('main.models.users.*', 'main.models.messages.*')
                ),
                modules.LinkList('Услуги',
                                 children=[
                                     ['Услуги',
                                      '/admin/main/services/'],
                                     ['Продукты',
                                      '/admin/main/products/'],
                                     ['Категории продуктов',
                                      '/admin/main/productcategories/'],
                                 ]),
                modules.LinkList('Вакансии',
                                 children=[
                                     ['Вакансии',
                                      '/admin/main/vacancy/'],
                                     ['Резюме',
                                      '/admin/main/resume/'],
                                 ]),
                modules.LinkList('Организации',
                                 children=[
                                     ['Контакты',
                                      '/admin/main/contacts/'],
                                     ['Партнёры',
                                      '/admin/main/partners/'],
                                 ]),

            ],
        ))

