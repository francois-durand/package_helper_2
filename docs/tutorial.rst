========
Tutorial
========

Package Helper 2 helps you create, develop and maintain a package. If you use all the tools presented in this tutorial,
things will work this way:

* You create the file structure of your package in less than a minute with Cookiecutter_.

* You use the IDE PyCharm_. It is configured to:

    * Generate the documentation of your package locally,
    * Run the unit tests.

* Your project is on GitHub_. When you push modifications:

    * GitHub automatically generates the documentation, and publishes it online if the branch is "master",
    * GitHub automatically runs the unit tests on several versions of Python.
    * Codecov_ displays what parts of the package are covered by the unit tests.

* When you make a *release* on GitHub, GitHub automatically publishes your package on PyPI_. This way, any Python
  user can install it with ``pip install``.

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _PyCharm: https://www.jetbrains.com/pycharm
.. _GitHub: https://github.com
.. _PyPI: https://pypi.python.org/pypi
.. _Codecov: https://codecov.io

Tick the tools that you want to use:

.. raw:: html

    <form>
        <ul style="list-style-type:none">
            <li><input type="checkbox" checked onchange="switchVisibility(this, 'venv')"> Virtualenv: virtual
                environment. <em>Recommended especially if your use a third-party package that is still in a 0.x.x
                release (which means that its API is not considered stable yet).</em></li>
            <li><input type="checkbox" checked onchange="switchVisibility(this, 'github')"> Github: collaborative
                version control.
            <ul style="list-style-type:none">
                <li><input type="checkbox" checked onchange="switchVisibility(this, 'codecov')"> Codecov: check if
                    the unit tests cover the whole package.</li>
            </ul>
            </li>
        </ul>

-------------------------------
Preliminaries: Once and for All
-------------------------------

.. raw:: html
   :file: _static/preliminaries.html

-------------------
Create Your package
-------------------

.. raw:: html
   :file: _static/create_your_package.html

---------------------------------
Develop and Maintain Your Package
---------------------------------

.. raw:: html
   :file: _static/during_the_life_of_your_package.html
